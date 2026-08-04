import type { LinkedInPostmanSnapshot } from "./postman.ts";

const root = new URL("../", import.meta.url);
const snapshot = (await Bun.file(
  new URL("spec/linkedin-postman.snapshot.json", root),
).json()) as LinkedInPostmanSnapshot;
const outputDir = new URL("src/generated/rest/", root);
const operations = snapshot.operations;

const source = `// This file is generated from spec/linkedin-postman.snapshot.json. Do not edit by hand.
import type {
  LinkedInClient,
  LinkedInRequestOptions,
  LinkedInResponse,
  RestliQueryValue,
} from "../../client.ts";

export const LINKEDIN_POSTMAN_API_VERSION = ${JSON.stringify(snapshot.apiVersion)};
export const LINKEDIN_POSTMAN_SOURCE_COUNT = ${snapshot.sources.length};
export const LINKEDIN_POSTMAN_REQUEST_COUNT = ${snapshot.operations.length};
export const LINKEDIN_POSTMAN_EXCLUDED_REQUEST_COUNT = ${snapshot.excludedOperations.length};
export const linkedinExcludedOperations = ${JSON.stringify(snapshot.excludedOperations, null, 2)} as const;

export const linkedinOperations = ${JSON.stringify(operations, null, 2)} as const;

export type LinkedInOperation = (typeof linkedinOperations)[number];
export type LinkedInOperationId = LinkedInOperation["id"];

export interface LinkedInOperationInput {
  readonly variables?: Readonly<Record<string, string | number>>;
  readonly query?: Readonly<Record<string, RestliQueryValue | undefined>>;
  readonly body?: unknown;
  readonly rawBody?: BodyInit;
  readonly headers?: Readonly<Record<string, string>>;
  readonly queryTunneling?: boolean | "auto";
}

export class LinkedInGeneratedClient {
  readonly operations = linkedinOperations;
  private readonly byId = new Map<string, LinkedInOperation>(
    linkedinOperations.map((operation) => [operation.id, operation]),
  );

  constructor(private readonly client: LinkedInClient) {}

  list(): readonly LinkedInOperation[] {
    return this.operations;
  }

  get(id: LinkedInOperationId | (string & {})): LinkedInOperation {
    const operation = this.byId.get(id);
    if (!operation) throw new Error(\`Unknown LinkedIn operation: \${id}\`);
    return operation;
  }

  search(query: string, limit = 20): readonly LinkedInOperation[] {
    const terms = query.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
    return this.operations
      .map((operation) => ({ operation, score: score(operation, terms) }))
      .filter(({ score }) => terms.length === 0 || score > 0)
      .sort((left, right) => right.score - left.score || left.operation.id.localeCompare(right.operation.id))
      .slice(0, limit)
      .map(({ operation }) => operation);
  }

  invoke<T = unknown>(
    id: LinkedInOperationId | (string & {}),
    input: LinkedInOperationInput = {},
  ): Promise<LinkedInResponse<T>> {
    const operation = this.get(id);
    const url = resolveTemplate(operation.url, operation.variables, input.variables ?? {});
    const options: LinkedInRequestOptions = {
      method: operation.method,
      query: input.query,
      body: input.body,
      rawBody: input.rawBody,
      headers: input.headers === undefined ? undefined : { ...input.headers },
      queryTunneling: input.queryTunneling,
      ...("restliMethod" in operation && operation.restliMethod
        ? { restliMethod: operation.restliMethod as LinkedInRequestOptions["restliMethod"] }
        : {}),
    };
    return this.client.request<T>(url, options);
  }
}

export function createLinkedInGeneratedClient(client: LinkedInClient): LinkedInGeneratedClient {
  return new LinkedInGeneratedClient(client);
}

function resolveTemplate(
  template: string,
  requiredVariables: readonly string[],
  variables: Readonly<Record<string, string | number>>,
): string {
  const missing = requiredVariables.filter((name) => variables[name] === undefined);
  if (missing.length > 0) throw new Error(\`Missing LinkedIn operation variables: \${missing.join(", ")}\`);
  const standalone = template.match(/^\\/{([A-Za-z0-9_]+)}$/);
  if (standalone) {
    const value = variables[standalone[1]!];
    if (typeof value === "string" && /^https?:\\/\\//.test(value)) return value;
  }
  return template.replaceAll(/\\{([A-Za-z0-9_]+)\\}/g, (_match, name: string) => {
    const value = variables[name];
    return value === undefined ? \`{\${name}}\` : encodeURIComponent(String(value));
  });
}

function score(operation: LinkedInOperation, terms: readonly string[]): number {
  const text = [operation.name, operation.collection, ...operation.folder, operation.method, operation.url]
    .join(" ")
    .toLowerCase();
  return terms.reduce((total, term) => total + (text.includes(term) ? 1 : 0), 0);
}
`;

await Bun.write(new URL("operations.ts", outputDir), source);
await Bun.write(new URL("index.ts", outputDir), `export * from "./operations.ts";\n`);
console.log(
  `Generated ${operations.length} unique LinkedIn operations from ${snapshot.operations.length} documented requests.`,
);
