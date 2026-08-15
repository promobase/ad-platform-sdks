import {
  type EffectJsonRequestError,
  jsonRequestEffect,
  type RetryConfig,
} from "@openpromo/sdk-runtime";
import { Data, Effect, Schema } from "effect";

import { TikTokApiError } from "../errors.ts";
import type { PublishStatusResponse } from "./types.ts";

const TT_API_BASE = "https://business-api.tiktok.com/open_api/v1.3";

const DEFAULT_RETRY: RetryConfig = {
  maxRetries: 0,
  initialBackoffMs: 1000,
  retryableStatuses: [429, 500, 502, 503, 504],
  retryOnNetworkError: true,
};

export interface TikTokRequestOptions {
  method: string;
  path: string;
  body?: Record<string, unknown>;
  query?: Record<string, unknown>;
}

export interface TikTokRequestClientOptions {
  accessToken: string;
  baseUrl?: string;
  fetch?: typeof fetch;
}

export type TikTokResponseDataSchema<T> = Schema.Schema<T, any, never>;

export class TikTokSchemaError extends Data.TaggedError("TikTokSchemaError")<{
  readonly cause: unknown;
}> {}

export type TikTokRequestError = EffectJsonRequestError | TikTokApiError | TikTokSchemaError;

export const TikTokPublishResultSchema = Schema.Struct({
  share_id: Schema.String,
});

export const TikTokPublishStatusSchema: TikTokResponseDataSchema<PublishStatusResponse> =
  Schema.Struct({
    status: Schema.Literal(
      "PROCESSING_DOWNLOAD",
      "PUBLISH_COMPLETE",
      "FAILED",
      "SEND_TO_USER_INBOX",
    ),
    post_ids: Schema.optional(Schema.mutable(Schema.Array(Schema.String))),
    reason: Schema.optional(Schema.String),
  });

export const TikTokVideoListSchema = Schema.Struct({
  videos: Schema.mutable(
    Schema.Array(Schema.Record({ key: Schema.String, value: Schema.Unknown })),
  ),
  cursor: Schema.Number,
  has_more: Schema.Boolean,
});

function tiktokResponseEnvelopeSchema<T>(data: TikTokResponseDataSchema<T>) {
  return Schema.Struct({
    code: Schema.Number,
    message: Schema.String,
    request_id: Schema.String,
    data,
  });
}

function buildUrl(
  path: string,
  query: Record<string, unknown> | undefined,
  baseUrl: string,
): string {
  let url = `${baseUrl.replace(/\/$/u, "")}${path}`;
  if (!query) return url;

  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (value !== undefined && value !== null) {
      params.set(key, typeof value === "object" ? JSON.stringify(value) : String(value));
    }
  }
  url += `?${params.toString()}`;
  return url;
}

export function tiktokRequestErrorToError(error: TikTokRequestError): Error {
  if (error instanceof TikTokApiError) return error;

  switch (error._tag) {
    case "EffectHttpError":
      return TikTokApiError.fromResponse(error.status, error.body);
    case "EffectNetworkError":
      return new Error(`TikTok API network error: ${String(error.cause)}`);
    case "EffectJsonParseError":
      return new Error(`TikTok API returned invalid JSON: ${String(error.cause)}`);
    case "TikTokSchemaError":
      return new Error(`TikTok API response validation failed: ${String(error.cause)}`);
    default:
      return error;
  }
}

export function tiktokRequestEffect<T>(
  opts: TikTokRequestClientOptions,
  request: TikTokRequestOptions,
  dataSchema?: TikTokResponseDataSchema<T>,
): Effect.Effect<T, TikTokRequestError> {
  const effectiveDataSchema = dataSchema ?? (Schema.Unknown as TikTokResponseDataSchema<T>);
  const envelopeSchema = tiktokResponseEnvelopeSchema(effectiveDataSchema);

  return jsonRequestEffect<unknown>({
    method: request.method,
    url: buildUrl(request.path, request.query, opts.baseUrl ?? TT_API_BASE),
    body: request.body,
    headers: {
      "Access-Token": opts.accessToken,
      "Content-Type": "application/json",
    },
    fetch: opts.fetch,
    retry: DEFAULT_RETRY,
  }).pipe(
    Effect.flatMap((responseBody) =>
      Schema.decodeUnknown(envelopeSchema)(responseBody).pipe(
        Effect.mapError((cause) => new TikTokSchemaError({ cause })),
      ),
    ),
    Effect.flatMap((responseBody) => {
      if (responseBody.code !== 0) {
        return Effect.fail(TikTokApiError.fromResponse(200, responseBody));
      }
      return Effect.succeed(responseBody.data as T);
    }),
  );
}

export async function tiktokRequest<T>(
  opts: TikTokRequestClientOptions,
  request: TikTokRequestOptions,
  dataSchema?: TikTokResponseDataSchema<T>,
): Promise<T> {
  const result = await Effect.runPromise(
    Effect.either(tiktokRequestEffect<T>(opts, request, dataSchema)),
  );
  if (result._tag === "Left") throw tiktokRequestErrorToError(result.left);
  return result.right;
}
