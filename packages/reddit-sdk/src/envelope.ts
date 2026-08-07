/** Standard Reddit Ads API response envelope: everything sits under `data`. */
export interface RedditEnvelope<T = unknown> {
  data: T;
}

export interface RedditPagination {
  next_page_token?: string;
  previous_page_token?: string;
}
