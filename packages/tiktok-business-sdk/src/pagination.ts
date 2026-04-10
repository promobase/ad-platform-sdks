/**
 * TikTok Business API pagination.
 *
 * TikTok uses cursor-based pagination with `cursor` + `has_more`:
 * - Request: `cursor` (integer, default 0 or current timestamp)
 * - Response: `{ data: [...], cursor: number, has_more: boolean }`
 *
 * This differs from Meta's `paging.cursors.after` / `paging.next` pattern.
 */

export interface TikTokPaginatedResponse<T> {
  cursor: number;
  has_more: boolean;
  [key: string]: unknown;
}

export interface TikTokCursorOptions<T> {
  /** Function that makes the API call with given cursor. */
  fetcher: (cursor?: number) => Promise<TikTokPaginatedResponse<T> & Record<string, unknown>>;
  /** Function to extract the data array from the response. */
  extractData: (response: TikTokPaginatedResponse<T> & Record<string, unknown>) => T[];
}

/**
 * Async-iterable cursor for TikTok paginated endpoints.
 * Works with any endpoint that returns `{ cursor, has_more, ...data }`.
 */
export class TikTokCursor<T> implements AsyncIterable<T> {
  private readonly fetcher: TikTokCursorOptions<T>["fetcher"];
  private readonly extractData: TikTokCursorOptions<T>["extractData"];
  private nextCursor: number | undefined;
  private hasMore = true;
  private started = false;

  constructor(opts: TikTokCursorOptions<T>) {
    this.fetcher = opts.fetcher;
    this.extractData = opts.extractData;
  }

  /** Fetch the next page. */
  async next(): Promise<{ data: T[]; hasNext: boolean }> {
    if (!this.hasMore && this.started) return { data: [], hasNext: false };
    this.started = true;

    const response = await this.fetcher(this.nextCursor);
    const data = this.extractData(response);
    this.nextCursor = response.cursor;
    this.hasMore = response.has_more;

    return { data, hasNext: this.hasMore };
  }

  async *[Symbol.asyncIterator](): AsyncIterator<T> {
    while (true) {
      const page = await this.next();
      yield* page.data;
      if (!page.hasNext) break;
    }
  }

  /** Collect all items across all pages. */
  async toArray(): Promise<T[]> {
    const result: T[] = [];
    for await (const item of this) result.push(item);
    return result;
  }

  /** Collect up to N items. */
  async take(n: number): Promise<T[]> {
    const result: T[] = [];
    for await (const item of this) {
      result.push(item);
      if (result.length >= n) break;
    }
    return result;
  }
}
