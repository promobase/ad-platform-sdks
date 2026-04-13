export interface SearchRequest {
  query: string;
  pageToken?: string;
  pageSize?: number;
}

export interface SearchResponse<T> {
  results?: T[];
  nextPageToken?: string;
}

export async function* paginate<T>(
  fetchPage: (req: SearchRequest) => Promise<SearchResponse<T>>,
  initial: SearchRequest,
): AsyncIterable<T> {
  let pageToken: string | undefined = initial.pageToken;
  while (true) {
    const res = await fetchPage({ ...initial, pageToken });
    for (const row of res.results ?? []) yield row;
    if (!res.nextPageToken) return;
    pageToken = res.nextPageToken;
  }
}
