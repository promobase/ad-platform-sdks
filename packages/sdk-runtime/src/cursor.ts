import type { ApiClient } from "./client.ts";

export interface PaginationStrategy<T> {
  getData(response: unknown): T[];
  getNextPageParams(response: unknown): Record<string, unknown> | null;
}

export class Cursor<T> implements AsyncIterable<T> {
  private readonly client: ApiClient;
  private readonly path: string;
  private readonly fields: readonly string[];
  private readonly params: Record<string, unknown>;
  private readonly pagination: PaginationStrategy<T>;
  private nextPageParams: Record<string, unknown> | null = null;
  private hasMore = true;
  private started = false;

  constructor(
    client: ApiClient,
    path: string,
    opts: { fields: readonly string[]; params?: Record<string, unknown> },
    pagination: PaginationStrategy<T>,
  ) {
    this.client = client;
    this.path = path;
    this.fields = opts.fields;
    this.params = opts.params ?? {};
    this.pagination = pagination;
  }

  async next(): Promise<{ data: T[]; hasNext: boolean }> {
    if (!this.hasMore && this.started) return { data: [], hasNext: false };
    this.started = true;
    const params: Record<string, unknown> = { ...this.params, ...this.nextPageParams };
    const response = await this.client.getEdge(this.path, { fields: this.fields, params });
    const data = this.pagination.getData(response);
    this.nextPageParams = this.pagination.getNextPageParams(response);
    this.hasMore = this.nextPageParams !== null;
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
