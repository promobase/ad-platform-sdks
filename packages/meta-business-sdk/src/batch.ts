import type { ApiClient } from "@promobase/sdk-runtime";
import { FacebookApiError } from "./errors.ts";

const MAX_BATCH_SIZE = 50;

// Phantom type handle — carries the result type at compile time
export type BatchHandle<T> = { readonly __handleId: number; readonly __phantom: T };

// Any object with __path and __brand
export type BatchTarget<T> = { readonly __path: string; readonly __brand: T };

interface BatchRequest {
  method: string;
  relative_url: string;
  body?: string;
}

interface BatchResponseItem {
  code: number;
  headers: Array<{ name: string; value: string }>;
  body: string;
}

export class BatchBuilder {
  private requests: BatchRequest[] = [];
  private nextId = 0;

  get<T, F extends (keyof T)[]>(
    target: BatchTarget<T>,
    opts: { fields: F; params?: Record<string, unknown> },
  ): BatchHandle<Pick<T, F[number]>> {
    const params = new URLSearchParams();
    params.set("fields", (opts.fields as string[]).join(","));
    if (opts.params) {
      for (const [k, v] of Object.entries(opts.params)) {
        if (v !== undefined && v !== null) {
          params.set(k, typeof v === "object" ? JSON.stringify(v) : String(v));
        }
      }
    }
    const id = this.nextId++;
    this.requests.push({
      method: "GET",
      relative_url: `${target.__path}?${params.toString()}`,
    });
    return { __handleId: id } as unknown as BatchHandle<Pick<T, F[number]>>;
  }

  getEdge<T, F extends (keyof T)[]>(
    target: BatchTarget<T>,
    opts: { fields: F; params?: Record<string, unknown> },
  ): BatchHandle<Pick<T, F[number]>[]> {
    const params = new URLSearchParams();
    params.set("fields", (opts.fields as string[]).join(","));
    if (opts.params) {
      for (const [k, v] of Object.entries(opts.params)) {
        if (v !== undefined && v !== null) {
          params.set(k, typeof v === "object" ? JSON.stringify(v) : String(v));
        }
      }
    }
    const id = this.nextId++;
    this.requests.push({
      method: "GET",
      relative_url: `${target.__path}?${params.toString()}`,
    });
    return { __handleId: id } as unknown as BatchHandle<Pick<T, F[number]>[]>;
  }

  post<T>(target: BatchTarget<T>, params: Record<string, unknown>): BatchHandle<T> {
    const body = new URLSearchParams();
    for (const [k, v] of Object.entries(params)) {
      if (v !== undefined && v !== null) {
        body.set(k, typeof v === "object" ? JSON.stringify(v) : String(v));
      }
    }
    const id = this.nextId++;
    this.requests.push({
      method: "POST",
      relative_url: target.__path,
      body: body.toString(),
    });
    return { __handleId: id } as unknown as BatchHandle<T>;
  }

  delete(target: BatchTarget<unknown>): BatchHandle<void> {
    const id = this.nextId++;
    this.requests.push({
      method: "DELETE",
      relative_url: target.__path,
    });
    return { __handleId: id } as unknown as BatchHandle<void>;
  }

  /** @internal */
  getRequests(): BatchRequest[] {
    return this.requests;
  }
}

// The resolved type: map each BatchHandle<T> in an object to T
export type ResolveBatchHandles<T> = {
  [K in keyof T]: T[K] extends BatchHandle<infer R> ? R : never;
};

export async function executeBatch<T extends Record<string, BatchHandle<unknown>>>(
  client: ApiClient,
  apiVersion: string,
  builder: BatchBuilder,
  handles: T,
): Promise<ResolveBatchHandles<T>> {
  const requests = builder.getRequests();

  if (requests.length === 0) {
    return {} as ResolveBatchHandles<T>;
  }

  if (requests.length > MAX_BATCH_SIZE) {
    throw new Error(
      `Batch request exceeds maximum of ${MAX_BATCH_SIZE} requests (got ${requests.length})`,
    );
  }

  // Prepend API version to each relative_url
  const versionedRequests = requests.map((r) => ({
    ...r,
    relative_url: apiVersion ? `${apiVersion}/${r.relative_url}` : r.relative_url,
  }));

  const response = await client.post<(BatchResponseItem | null)[]>("", {
    batch: JSON.stringify(versionedRequests),
  });

  // Map responses back to handles
  const result: Record<string, unknown> = {};

  for (const [key, handle] of Object.entries(handles)) {
    const handleId = (handle as unknown as { __handleId: number }).__handleId;
    const item = response[handleId];

    if (item === null || item === undefined) {
      throw new FacebookApiError({
        message: `Batch request "${key}" was not executed (throttled or dependency failure)`,
        status: 0,
        code: 0,
        type: "BatchError",
        fbtrace_id: "",
      });
    }

    if (item.code >= 400) {
      const errorBody = JSON.parse(item.body);
      throw FacebookApiError.fromResponse(item.code, errorBody);
    }

    const body = JSON.parse(item.body);
    // For edge requests, the data is in .data array
    if (Array.isArray(body.data)) {
      result[key] = body.data;
    } else {
      result[key] = body;
    }
  }

  return result as ResolveBatchHandles<T>;
}
