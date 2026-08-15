import type { EndpointIdempotency } from "./effect-runtime.ts";

export type PublishPlatform =
  | "facebook"
  | "instagram"
  | "threads"
  | "tiktok"
  | "linkedin"
  | "x"
  | "youtube";

export type JsonPrimitive = string | number | boolean | null;
export type JsonValue =
  | JsonPrimitive
  | readonly JsonValue[]
  | { readonly [key: string]: JsonValue };

/** A provider operation that can safely cross a durable workflow boundary. */
export interface PublishOperationHandle {
  readonly platform: PublishPlatform;
  /** Provider-side upload, publish, or processing identifier. */
  readonly operationId: string;
  readonly idempotencyKey?: string;
  readonly expiresAt?: string;
}

export type PublishState =
  | "accepted"
  | "processing"
  | "published"
  | "failed"
  | "timeout"
  | "unknown";

export type PublishPhase =
  | "initialize"
  | "upload"
  | "finalize"
  | "publish"
  | "status"
  | "reconcile";

/** Metadata for a provider phase; orchestration remains outside Mosaic. */
export interface PublishPhaseContract {
  readonly phase: PublishPhase;
  readonly effect: "read" | "write" | "publish";
  readonly idempotency: EndpointIdempotency;
}

export const PublishPhases = {
  initialize: { phase: "initialize", effect: "write", idempotency: "keyed" },
  upload: { phase: "upload", effect: "write", idempotency: "keyed" },
  finalize: { phase: "finalize", effect: "write", idempotency: "keyed" },
  publish: { phase: "publish", effect: "publish", idempotency: "keyed" },
  status: { phase: "status", effect: "read", idempotency: "safe" },
  reconcile: { phase: "reconcile", effect: "read", idempotency: "safe" },
} as const satisfies Record<PublishPhase, PublishPhaseContract>;

export type PublishResultBase<Raw = JsonValue> = {
  readonly platform: PublishPlatform;
  readonly raw: Raw;
  /** @deprecated Use operationId or postId explicitly. */
  readonly id?: string;
};

export type PlatformPublishResult<Raw = JsonValue> =
  | (PublishResultBase<Raw> & {
      readonly state: "accepted" | "processing";
      readonly operationId: string;
      readonly postId?: string;
      readonly retryAfterMs?: number;
    })
  | (PublishResultBase<Raw> & {
      readonly state: "published";
      readonly postId: string;
      readonly operationId?: string;
      readonly permalinkUrl?: string;
      readonly shareUrl?: string;
    })
  | (PublishResultBase<Raw> & {
      readonly state: "failed" | "timeout" | "unknown";
      readonly operationId?: string;
      readonly message: string;
      readonly postId?: string;
    });

export type PlatformPublishError<Raw = JsonValue> = Extract<
  PlatformPublishResult<Raw>,
  { readonly state: "failed" | "timeout" | "unknown" }
>;

export function acceptedPublish<Raw>(
  handle: PublishOperationHandle,
  raw: Raw,
): PlatformPublishResult<Raw> {
  return {
    platform: handle.platform,
    state: "accepted",
    operationId: handle.operationId,
    id: handle.operationId,
    raw,
  };
}

export function publishedPublish<Raw>(input: {
  readonly platform: PublishPlatform;
  readonly postId: string;
  readonly operationId?: string;
  readonly permalinkUrl?: string;
  readonly shareUrl?: string;
  readonly raw: Raw;
}): PlatformPublishResult<Raw> {
  return { ...input, state: "published", id: input.postId };
}
