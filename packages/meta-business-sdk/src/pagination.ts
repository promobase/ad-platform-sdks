import type { PaginationStrategy } from "@promobase/sdk-runtime";

export function metaPagination<T>(): PaginationStrategy<T> {
  return {
    getData(response: unknown): T[] {
      return (response as { data: T[] }).data ?? [];
    },
    getNextPageParams(response: unknown): Record<string, unknown> | null {
      const paging = (response as { paging?: { cursors?: { after?: string }; next?: string } }).paging;
      const after = paging?.cursors?.after;
      return after && paging?.next ? { after } : null;
    },
  };
}
