/**
 * Async-iterable cursor over Snapchat Marketing API pages.
 *
 * Snapchat paginates list responses with `paging.next_link` (absolute URLs).
 * The cursor follows those links lazily, so you can iterate without loading
 * every page into memory:
 *
 * ```ts
 * for await (const campaign of Snapchat.createClient(opts).campaigns.list({ adAccountId })) {
 *   ...
 * }
 * ```
 */
export class SnapchatCursor<T> implements AsyncIterable<T> {
  constructor(
    private readonly fetchPage: (nextLink?: string) => Promise<{ items: T[]; nextLink?: string }>,
  ) {}

  async *[Symbol.asyncIterator](): AsyncIterator<T> {
    let link: string | undefined;
    while (true) {
      const page = await this.fetchPage(link);
      for (const item of page.items) yield item;
      if (!page.nextLink) return;
      link = page.nextLink;
    }
  }

  /** Materialize all items into a single array. */
  async all(): Promise<T[]> {
    const items: T[] = [];
    for await (const item of this) items.push(item);
    return items;
  }

  /** Fetch only the first page. */
  async first(): Promise<T[]> {
    const page = await this.fetchPage(undefined);
    return page.items;
  }
}
