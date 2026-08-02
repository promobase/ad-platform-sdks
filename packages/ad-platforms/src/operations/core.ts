import { z } from "zod";

export type OperationPlatform =
  | "facebook"
  | "instagram"
  | "linkedin"
  | "threads"
  | "tiktok"
  | "x"
  | "youtube";

export type OperationEffect = "read" | "write" | "publish" | "delete" | "spend";
export type OperationExecution = "inline" | "durable";
export type OperationIdempotency = "safe" | "keyed" | "unsafe";

export interface OperationExecutionContext {
  requestId?: string;
  signal?: AbortSignal;
  metadata?: Readonly<Record<string, unknown>>;
}

export interface OperationDefinition<
  Id extends string = string,
  InputSchema extends z.ZodType = z.ZodType,
  OutputSchema extends z.ZodType = z.ZodType,
> {
  id: Id;
  platform: OperationPlatform;
  summary: string;
  description?: string;
  tags: readonly string[];
  inputSchema: InputSchema;
  outputSchema: OutputSchema;
  effect: OperationEffect;
  execution: OperationExecution;
  idempotency: OperationIdempotency;
  requiresApproval: boolean;
  requiredScopes?: readonly string[];
  execute: (
    input: z.output<InputSchema>,
    context: OperationExecutionContext,
  ) => Promise<z.input<OutputSchema>> | z.input<OutputSchema>;
  revert?: (
    input: z.output<InputSchema>,
    result: z.output<OutputSchema>,
    context: OperationExecutionContext,
  ) => Promise<void> | void;
}

export type AnyOperation = OperationDefinition<string, z.ZodType, z.ZodType>;
export type OperationId<Operations extends readonly AnyOperation[]> = Operations[number]["id"];
export type OperationById<
  Operations extends readonly AnyOperation[],
  Id extends OperationId<Operations>,
> = Extract<Operations[number], { id: Id }>;
export type OperationInput<Operation extends AnyOperation> = z.input<Operation["inputSchema"]>;
export type OperationOutput<Operation extends AnyOperation> = z.output<Operation["outputSchema"]>;

export interface OperationSearchOptions {
  platform?: OperationPlatform | readonly OperationPlatform[];
  effect?: OperationEffect | readonly OperationEffect[];
  tags?: readonly string[];
  limit?: number;
}

export interface OperationDescription {
  id: string;
  platform: OperationPlatform;
  summary: string;
  description?: string;
  tags: readonly string[];
  inputSchema: Record<string, unknown>;
  outputSchema: Record<string, unknown>;
  effect: OperationEffect;
  execution: OperationExecution;
  idempotency: OperationIdempotency;
  requiresApproval: boolean;
  requiredScopes: readonly string[];
  reversible: boolean;
}

export interface OperationSearchResult extends OperationDescription {
  score: number;
}

export interface OperationMiddleware {
  beforeExecute?: (operation: OperationDescription, input: unknown) => Promise<void> | void;
  afterExecute?: (
    operation: OperationDescription,
    input: unknown,
    output: unknown,
    durationMs: number,
  ) => Promise<void> | void;
  onError?: (
    operation: OperationDescription,
    input: unknown,
    error: unknown,
  ) => Promise<void> | void;
}

export interface OperationCatalogOptions {
  middleware?: OperationMiddleware;
}

export class OperationCatalog<const Operations extends readonly AnyOperation[]> {
  readonly operations: Operations;
  private readonly byId: ReadonlyMap<string, AnyOperation>;
  private readonly middleware?: OperationMiddleware;

  constructor(operations: Operations, options: OperationCatalogOptions = {}) {
    const byId = new Map<string, AnyOperation>();
    for (const operation of operations) {
      if (byId.has(operation.id)) {
        throw new Error(`Duplicate operation id: ${operation.id}`);
      }
      validateOperationDefinition(operation);
      byId.set(operation.id, operation);
    }
    this.operations = operations;
    this.byId = byId;
    this.middleware = options.middleware;
  }

  list(): OperationDescription[] {
    return this.operations.map((operation) => describeOperation(operation));
  }

  has(id: string): id is OperationId<Operations> {
    return this.byId.has(id);
  }

  describe<Id extends OperationId<Operations>>(id: Id): OperationDescription;
  describe(id: string): OperationDescription;
  describe(id: string): OperationDescription {
    return describeOperation(this.require(id));
  }

  search(query: string, options: OperationSearchOptions = {}): OperationSearchResult[] {
    const terms = tokenize(query);
    return this.operations
      .filter((operation) => matchesFilters(operation, options))
      .map((operation) => ({
        ...describeOperation(operation),
        score: searchScore(operation, terms),
      }))
      .filter((operation) => terms.length === 0 || operation.score > 0)
      .sort((left, right) => right.score - left.score || left.id.localeCompare(right.id))
      .slice(0, options.limit ?? 20);
  }

  async invoke<Id extends OperationId<Operations>>(
    id: Id,
    input: OperationInput<OperationById<Operations, Id>>,
    context?: OperationExecutionContext,
  ): Promise<OperationOutput<OperationById<Operations, Id>>>;
  async invoke(id: string, input: unknown, context?: OperationExecutionContext): Promise<unknown>;
  async invoke(
    id: string,
    input: unknown,
    context: OperationExecutionContext = {},
  ): Promise<unknown> {
    const operation = this.require(id);
    const parsedInput = operation.inputSchema.parse(input);
    const description = describeOperation(operation);
    await this.middleware?.beforeExecute?.(description, parsedInput);
    const startedAt = Date.now();

    try {
      const rawOutput = await operation.execute(parsedInput, context);
      const output = operation.outputSchema.parse(rawOutput);
      await this.middleware?.afterExecute?.(
        description,
        parsedInput,
        output,
        Date.now() - startedAt,
      );
      return output;
    } catch (error) {
      await this.middleware?.onError?.(description, parsedInput, error);
      throw error;
    }
  }

  private require(id: string): AnyOperation {
    const operation = this.byId.get(id);
    if (!operation) throw new Error(`Unknown operation: ${id}`);
    return operation;
  }
}

export function defineOperation<
  const Id extends string,
  InputSchema extends z.ZodType,
  OutputSchema extends z.ZodType,
>(
  operation: OperationDefinition<Id, InputSchema, OutputSchema>,
): OperationDefinition<Id, InputSchema, OutputSchema> {
  validateOperationDefinition(operation);
  return operation;
}

export function createOperationCatalog<const Operations extends readonly AnyOperation[]>(
  operations: Operations,
  options?: OperationCatalogOptions,
): OperationCatalog<Operations> {
  return new OperationCatalog(operations, options);
}

function validateOperationDefinition(operation: AnyOperation): void {
  if (!/^[a-z][a-z0-9]*(?:\.[a-z][a-zA-Z0-9]*)+$/.test(operation.id)) {
    throw new Error(`Invalid operation id: ${operation.id}`);
  }
  if (operation.effect === "read" && operation.requiresApproval) {
    throw new Error(`Read operation cannot require approval: ${operation.id}`);
  }
  if (operation.execution === "durable" && operation.effect === "read") {
    throw new Error(`Read operation cannot use durable execution: ${operation.id}`);
  }
}

function describeOperation(operation: AnyOperation): OperationDescription {
  return {
    id: operation.id,
    platform: operation.platform,
    summary: operation.summary,
    ...(operation.description ? { description: operation.description } : {}),
    tags: operation.tags,
    inputSchema: z.toJSONSchema(operation.inputSchema, { target: "draft-7", io: "input" }),
    outputSchema: z.toJSONSchema(operation.outputSchema, { target: "draft-7" }),
    effect: operation.effect,
    execution: operation.execution,
    idempotency: operation.idempotency,
    requiresApproval: operation.requiresApproval,
    requiredScopes: operation.requiredScopes ?? [],
    reversible: operation.revert !== undefined,
  };
}

function tokenize(value: string): string[] {
  return value
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean);
}

function searchScore(operation: AnyOperation, terms: readonly string[]): number {
  if (terms.length === 0) return 1;
  const id = operation.id.toLowerCase();
  const summary = operation.summary.toLowerCase();
  const description = operation.description?.toLowerCase() ?? "";
  const tags = operation.tags.map((tag) => tag.toLowerCase());
  return terms.reduce((score, term) => {
    if (id === term) return score + 20;
    if (id.includes(term)) score += 8;
    if (summary.includes(term)) score += 4;
    if (description.includes(term)) score += 2;
    if (tags.some((tag) => tag.includes(term))) score += 3;
    return score;
  }, 0);
}

function matchesFilters(operation: AnyOperation, options: OperationSearchOptions): boolean {
  const platforms = toArray(options.platform);
  const effects = toArray(options.effect);
  return (
    (platforms.length === 0 || platforms.includes(operation.platform)) &&
    (effects.length === 0 || effects.includes(operation.effect)) &&
    (options.tags?.every((tag) => operation.tags.includes(tag)) ?? true)
  );
}

function toArray<T>(value: T | readonly T[] | undefined): readonly T[] {
  if (value === undefined) return [];
  return Array.isArray(value) ? value : [value as T];
}
