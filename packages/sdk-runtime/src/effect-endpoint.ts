import { Effect, JSONSchema, Schema } from "effect";

import { InputValidationError, type PlatformError, ResponseDecodeError } from "./effect-errors.ts";
import {
  executeJsonRequest,
  type EndpointIdempotency,
  type SdkRuntimeEnvironment,
} from "./effect-runtime.ts";

type EndpointSchema = Schema.Schema.Any;

export interface EndpointParameter {
  readonly name: string;
  readonly wireName: string;
  readonly location: "path" | "query" | "header" | "body";
  readonly required: boolean;
  readonly nullable: boolean;
}

export interface EndpointDescriptor<
  Id extends string,
  InputSchema extends EndpointSchema,
  OutputSchema extends EndpointSchema,
> {
  readonly id: Id;
  readonly platform: string;
  readonly method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  readonly path: string;
  readonly summary: string;
  readonly description?: string;
  readonly effect: "read" | "write" | "publish" | "delete" | "spend";
  readonly execution: "inline" | "durable";
  readonly idempotency: EndpointIdempotency;
  readonly requiredScopes: readonly string[];
  readonly capabilities: readonly string[];
  readonly rateLimitBucket?: string;
  readonly authSchemes?: readonly string[];
  readonly protocols?: readonly string[];
  readonly staticHeaders?: Readonly<Record<string, string>>;
  readonly parameters: readonly EndpointParameter[];
  readonly inputSchema: InputSchema;
  readonly outputSchema: OutputSchema;
}

export type AnyEndpointDescriptor = EndpointDescriptor<string, EndpointSchema, EndpointSchema>;

export interface EndpointExecutionContext {
  readonly requestId?: string;
  readonly signal?: AbortSignal;
  readonly idempotencyKey?: string;
}

export interface EndpointRequest {
  readonly url: string;
  readonly headers?: Readonly<Record<string, string>>;
  readonly body?: unknown;
  readonly idempotencyKey?: string;
}

export function defineEndpointDescriptor<
  const Id extends string,
  InputSchema extends EndpointSchema,
  OutputSchema extends EndpointSchema,
>(
  descriptor: EndpointDescriptor<Id, InputSchema, OutputSchema>,
): EndpointDescriptor<Id, InputSchema, OutputSchema> {
  return descriptor;
}

export function executeEndpoint<
  Id extends string,
  InputSchema extends EndpointSchema,
  OutputSchema extends EndpointSchema,
>(
  descriptor: EndpointDescriptor<Id, InputSchema, OutputSchema>,
  input: unknown,
  resolveRequest: (input: Schema.Schema.Type<InputSchema>) => EndpointRequest,
  context: EndpointExecutionContext = {},
): Effect.Effect<Schema.Schema.Type<OutputSchema>, PlatformError, SdkRuntimeEnvironment> {
  const errorContext = {
    platform: descriptor.platform,
    operationId: descriptor.id,
    requestId: context.requestId,
  };

  const inputSchema = descriptor.inputSchema as unknown as Schema.Schema<
    Schema.Schema.Type<InputSchema>,
    Schema.Schema.Encoded<InputSchema>,
    never
  >;
  const outputSchema = descriptor.outputSchema as unknown as Schema.Schema<
    Schema.Schema.Type<OutputSchema>,
    Schema.Schema.Encoded<OutputSchema>,
    never
  >;

  return Schema.decodeUnknown(inputSchema)(input).pipe(
    Effect.mapError((cause) => new InputValidationError({ ...errorContext, cause, value: input })),
    Effect.flatMap((decoded) =>
      Effect.try({
        try: () => resolveRequest(decoded),
        catch: (cause) => new InputValidationError({ ...errorContext, cause, value: input }),
      }),
    ),
    Effect.flatMap((request) => {
      return executeJsonRequest<Schema.Schema.Type<OutputSchema>>({
        ...errorContext,
        method: descriptor.method,
        url: request.url,
        headers: request.headers,
        body: request.body,
        rateLimitBucket: descriptor.rateLimitBucket,
        idempotency: descriptor.idempotency,
        idempotencyKey: request.idempotencyKey ?? context.idempotencyKey,
        decode: (value) =>
          Schema.decodeUnknown(outputSchema)(value).pipe(
            Effect.mapError((cause) => new ResponseDecodeError({ ...errorContext, cause, value })),
          ),
      });
    }),
  );
}

export function describeEndpoint(descriptor: AnyEndpointDescriptor) {
  return {
    id: descriptor.id,
    platform: descriptor.platform,
    method: descriptor.method,
    path: descriptor.path,
    summary: descriptor.summary,
    ...(descriptor.description ? { description: descriptor.description } : {}),
    effect: descriptor.effect,
    execution: descriptor.execution,
    idempotency: descriptor.idempotency,
    requiredScopes: descriptor.requiredScopes,
    capabilities: descriptor.capabilities,
    parameters: descriptor.parameters,
    inputSchema: JSONSchema.make(descriptor.inputSchema),
    outputSchema: JSONSchema.make(descriptor.outputSchema),
  };
}
