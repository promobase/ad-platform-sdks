import { Effect, Schema } from "effect";

import {
  describeEndpoint,
  executeEndpoint,
  type AnyEndpointDescriptor,
  type EndpointDescriptor,
  type EndpointExecutionContext,
  type EndpointRequest,
} from "./effect-endpoint.ts";
import type { PlatformError } from "./effect-errors.ts";
import { makeSdkRuntime, type SdkRuntimeEnvironment } from "./effect-runtime.ts";
import type { RuntimeRateLimiterService, RuntimeTelemetryService } from "./effect-services.ts";
import { isNativeRequestBody } from "./request-body.ts";

type AnySchema = Schema.Schema.Any;
export type EndpointInput<Descriptor extends AnyEndpointDescriptor> =
  Descriptor extends EndpointDescriptor<string, infer Input, AnySchema>
    ? Schema.Schema.Encoded<Input>
    : never;
export type EndpointOutput<Descriptor extends AnyEndpointDescriptor> =
  Descriptor extends EndpointDescriptor<string, AnySchema, infer Output>
    ? Schema.Schema.Type<Output>
    : never;

export interface EndpointClientConfig {
  readonly baseUrl?: string | Readonly<Record<string, string>>;
  readonly headers?:
    | Readonly<Record<string, string>>
    | ((descriptor: AnyEndpointDescriptor) => Readonly<Record<string, string>>);
  readonly resolveRequest?: (
    descriptor: AnyEndpointDescriptor,
    input: Readonly<Record<string, unknown>>,
  ) => EndpointRequest;
  readonly fetch?: typeof fetch;
  readonly rateLimiter?: RuntimeRateLimiterService;
  readonly telemetry?: RuntimeTelemetryService;
}

export interface EndpointSearchOptions {
  readonly platform?: string | readonly string[];
  readonly effect?: AnyEndpointDescriptor["effect"] | readonly AnyEndpointDescriptor["effect"][];
  readonly capabilities?: readonly string[];
  readonly limit?: number;
}

export interface EndpointOperationDescription extends ReturnType<typeof describeEndpoint> {
  readonly tags: readonly string[];
  readonly requiresApproval: boolean;
  readonly reversible: false;
}

export interface EndpointSearchResult extends EndpointOperationDescription {
  readonly score: number;
}

export interface EndpointClient<
  Descriptors extends readonly AnyEndpointDescriptor[] = readonly AnyEndpointDescriptor[],
> {
  readonly descriptors: Descriptors;
  readonly effect: <Descriptor extends Descriptors[number]>(
    descriptor: Descriptor,
    input: EndpointInput<Descriptor>,
    context?: EndpointExecutionContext,
  ) => Effect.Effect<EndpointOutput<Descriptor>, PlatformError, SdkRuntimeEnvironment>;
  readonly promise: <Descriptor extends Descriptors[number]>(
    descriptor: Descriptor,
    input: EndpointInput<Descriptor>,
    context?: EndpointExecutionContext,
  ) => Promise<EndpointOutput<Descriptor>>;
  readonly catalog: EndpointCatalog<Descriptors>;
  readonly dispose: () => Promise<void>;
}

export class EndpointCatalog<const Descriptors extends readonly AnyEndpointDescriptor[]> {
  readonly operations: Descriptors;
  private readonly byId: ReadonlyMap<string, AnyEndpointDescriptor>;

  constructor(
    descriptors: Descriptors,
    private readonly executePromise: (
      descriptor: AnyEndpointDescriptor,
      input: unknown,
      context?: EndpointExecutionContext,
    ) => Promise<unknown>,
  ) {
    const byId = new Map<string, AnyEndpointDescriptor>();
    for (const descriptor of descriptors) {
      if (byId.has(descriptor.id)) throw new Error(`Duplicate endpoint id: ${descriptor.id}`);
      byId.set(descriptor.id, descriptor);
    }
    this.operations = descriptors;
    this.byId = byId;
  }

  list(): EndpointOperationDescription[] {
    return this.operations.map(describeEndpointOperation);
  }

  describe(id: string): EndpointOperationDescription {
    return describeEndpointOperation(this.require(id));
  }

  search(query: string, options: EndpointSearchOptions = {}): EndpointSearchResult[] {
    const terms = tokenize(query);
    const platforms = toArray(options.platform);
    const effects = toArray(options.effect);
    return this.operations
      .filter(
        (descriptor) =>
          (platforms.length === 0 || platforms.includes(descriptor.platform)) &&
          (effects.length === 0 || effects.includes(descriptor.effect)) &&
          (options.capabilities?.every((capability) =>
            descriptor.capabilities.includes(capability),
          ) ??
            true),
      )
      .map((descriptor) => ({
        ...describeEndpointOperation(descriptor),
        score: scoreEndpoint(descriptor, terms),
      }))
      .filter((descriptor) => terms.length === 0 || descriptor.score > 0)
      .sort((left, right) => right.score - left.score || left.id.localeCompare(right.id))
      .slice(0, options.limit ?? 20);
  }

  invoke(id: string, input: unknown, context?: EndpointExecutionContext): Promise<unknown> {
    return this.executePromise(this.require(id), input, context);
  }

  private require(id: string): AnyEndpointDescriptor {
    const descriptor = this.byId.get(id);
    if (!descriptor) throw new Error(`Unknown endpoint: ${id}`);
    return descriptor;
  }
}

export function createEndpointClient<const Descriptors extends readonly AnyEndpointDescriptor[]>(
  descriptors: Descriptors,
  config: EndpointClientConfig = {},
): EndpointClient<Descriptors> {
  const runtime = makeSdkRuntime(config);
  const effect = <Descriptor extends Descriptors[number]>(
    descriptor: Descriptor,
    input: EndpointInput<Descriptor>,
    context: EndpointExecutionContext = {},
  ): Effect.Effect<EndpointOutput<Descriptor>, PlatformError, SdkRuntimeEnvironment> =>
    executeEndpoint(
      descriptor,
      input,
      (decoded) =>
        config.resolveRequest?.(descriptor, decoded as Readonly<Record<string, unknown>>) ??
        resolveEndpointRequest(descriptor, decoded as Readonly<Record<string, unknown>>, config),
      context,
    );
  const promise = <Descriptor extends Descriptors[number]>(
    descriptor: Descriptor,
    input: EndpointInput<Descriptor>,
    context: EndpointExecutionContext = {},
  ): Promise<EndpointOutput<Descriptor>> =>
    runtime.runPromise(effect(descriptor, input, context), { signal: context.signal });
  const catalog = new EndpointCatalog(descriptors, (descriptor, input, context) =>
    runtime.runPromise(
      executeEndpoint(
        descriptor,
        input,
        (decoded) =>
          config.resolveRequest?.(descriptor, decoded as Readonly<Record<string, unknown>>) ??
          resolveEndpointRequest(descriptor, decoded as Readonly<Record<string, unknown>>, config),
        context,
      ),
      { signal: context?.signal },
    ),
  );

  return { descriptors, effect, promise, catalog, dispose: runtime.dispose } as const;
}

export function resolveEndpointRequest(
  descriptor: AnyEndpointDescriptor,
  input: Readonly<Record<string, unknown>>,
  config: Pick<EndpointClientConfig, "baseUrl" | "headers"> = {},
): EndpointRequest {
  let path = descriptor.path;
  const query = new URLSearchParams();
  const requestHeaders =
    typeof config.headers === "function" ? config.headers(descriptor) : config.headers;
  let body: unknown;
  const bodyParameters = descriptor.parameters.filter((parameter) => parameter.location === "body");

  for (const parameter of descriptor.parameters) {
    const value = input[parameter.name];
    if (value === undefined || value === null) continue;
    switch (parameter.location) {
      case "path":
        path =
          path === `/{${parameter.wireName}}` && /^https?:\/\//.test(String(value))
            ? String(value)
            : path
                .replaceAll(`{${parameter.wireName}}`, encodeURIComponent(String(value)))
                .replaceAll(`{+${parameter.wireName}}`, encodeReservedPath(String(value)));
        break;
      case "query":
        for (const item of Array.isArray(value) ? value : [value])
          query.append(parameter.wireName, queryValue(item));
        break;
      case "header":
        break;
      case "body":
        body =
          bodyParameters.length === 1
            ? value
            : { ...(isRecord(body) ? body : {}), [parameter.wireName]: value };
        break;
    }
  }

  if (/\{[^}]+\}/.test(path)) throw new Error(`Missing path parameter for ${path}`);
  const baseUrl =
    typeof config.baseUrl === "string" ? config.baseUrl : config.baseUrl?.[descriptor.platform];
  const url = new URL(
    baseUrl === undefined || /^https?:\/\//.test(path) ? path : path.replace(/^\//, ""),
    baseUrl === undefined ? undefined : ensureTrailingSlash(baseUrl),
  );
  query.forEach((value, key) => url.searchParams.append(key, value));
  const headers: Record<string, string> = { ...descriptor.staticHeaders, ...requestHeaders };
  for (const parameter of descriptor.parameters) {
    if (parameter.location === "header" && input[parameter.name] !== undefined)
      headers[parameter.wireName] = String(input[parameter.name]);
  }
  if (body !== undefined && !isNativeRequestBody(body) && !hasHeader(headers, "content-type"))
    headers["content-type"] = "application/json";
  const idempotencyKey =
    typeof input.idempotencyKey === "string" ? input.idempotencyKey : undefined;
  return { url: url.toString(), headers, body, idempotencyKey };
}

function describeEndpointOperation(
  descriptor: AnyEndpointDescriptor,
): EndpointOperationDescription {
  return {
    ...describeEndpoint(descriptor),
    tags: descriptor.capabilities,
    requiresApproval: descriptor.effect !== "read",
    reversible: false,
  };
}

function scoreEndpoint(descriptor: AnyEndpointDescriptor, terms: readonly string[]): number {
  const values = [
    descriptor.id,
    descriptor.summary,
    descriptor.description ?? "",
    ...descriptor.capabilities,
  ].map((value) => value.toLowerCase());
  return terms.reduce(
    (score, term) =>
      score +
      values.reduce(
        (subtotal, value, index) =>
          subtotal + (value === term ? 20 : value.includes(term) ? (index < 2 ? 8 : 3) : 0),
        0,
      ),
    0,
  );
}

function tokenize(value: string): string[] {
  return value
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean);
}
function toArray<T>(value: T | readonly T[] | undefined): readonly T[] {
  return value === undefined ? [] : Array.isArray(value) ? value : [value as T];
}
function queryValue(value: unknown): string {
  return typeof value === "object" ? JSON.stringify(value) : String(value);
}
function encodeReservedPath(value: string): string {
  return value.split("/").map(encodeURIComponent).join("/");
}
function ensureTrailingSlash(value: string): string {
  return value.endsWith("/") ? value : `${value}/`;
}
function hasHeader(headers: Readonly<Record<string, string>>, name: string): boolean {
  return Object.keys(headers).some((key) => key.toLowerCase() === name);
}
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
