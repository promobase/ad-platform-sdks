import type { ApiClient, PaginatedResponse } from "./client.ts";

export class Cursor<T> implements AsyncIterable<T> {
  private readonly client: ApiClient;
  private readonly path: string;
  private readonly fields: readonly string[];
  private readonly params: Record<string, unknown>;
  private readonly deserialize: ((raw: unknown) => T) | undefined;
  private afterCursor: string | undefined = undefined;
  private hasMore = true;
  private started = false;

  constructor(
    client: ApiClient,
    path: string,
    opts: { fields: readonly string[]; params?: Record<string, unknown> },
    deserialize?: (raw: unknown) => T,
  ) {
    this.client = client;
    this.path = path;
    this.fields = opts.fields;
    this.params = opts.params ?? {};
    this.deserialize = deserialize;
  }

  async next(): Promise<{ data: T[]; hasNext: boolean }> {
    if (!this.hasMore && this.started) return { data: [], hasNext: false };
    this.started = true;
    const params: Record<string, unknown> = { ...this.params };
    if (this.afterCursor) params.after = this.afterCursor;
    const response = await this.client.getEdge<Record<string, unknown>>(this.path, { fields: this.fields, params });
    this.afterCursor = response.paging?.cursors?.after;
    this.hasMore = !!response.paging?.next;
    const data = response.data.map((item) =>
      this.deserialize ? this.deserialize(item) : (item as T),
    );
    return { data, hasNext: this.hasMore };
  }

  async *[Symbol.asyncIterator](): AsyncIterator<T> {
    while (true) {
      const page = await this.next();
      yield* page.data;
      if (!page.hasNext) break;
    }
  }

  async toArray(): Promise<T[]> {
    const result: T[] = [];
    for await (const item of this) result.push(item);
    return result;
  }

  async take(n: number): Promise<T[]> {
    const result: T[] = [];
    for await (const item of this) {
      result.push(item);
      if (result.length >= n) break;
    }
    return result;
  }
}
