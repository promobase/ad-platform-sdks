// Auto-generated client for catalog_feeds — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { FeedsListResponse, FeedsCreateResponse, FeedsGetResponse, FeedsUpdateResponse, FeedsDeleteResponse, FeedsIngestResponse, FeedProcessingResultsListResponse, ItemsIssuesListResponse } from "../types.ts";
import type { ListFeedsParams, CreateFeedParams, GetFeedsParams, UpdateFeedParams, DeleteFeedParams, PostFeedsIngestParams, ListFeedProcessingResultsParams, ListItemsIssuesParams } from "../params.ts";

/** catalog_feeds — 8 endpoints */
export function createCatalogFeedsClient(api: PinterestApiClient) {
  return {
    /** List feeds
   * Requires pinterest_oauth2: catalogs:read; client_credentials: catalogs:read. */
    async listFeeds(params: ListFeedsParams): Promise<FeedsListResponse> {
      const query = params;
      const envelope = await api.get<FeedsListResponse>(`/catalogs/feeds`, query);
      return envelope;
    },

    /** Create feed
   * Requires pinterest_oauth2: catalogs:read, catalogs:write; client_credentials: catalogs:read, catalogs:write. */
    async createFeed(params: CreateFeedParams): Promise<FeedsCreateResponse> {
      const { body, ...query } = params;
      const envelope = await api.post<FeedsCreateResponse>(`/catalogs/feeds`, body);
      return envelope;
    },

    /** Get feed
   * Requires pinterest_oauth2: catalogs:read; client_credentials: catalogs:read. */
    async getFeeds(params: GetFeedsParams): Promise<FeedsGetResponse> {
      const { feedId, ...query } = params;
      const envelope = await api.get<FeedsGetResponse>(`/catalogs/feeds/${feedId}`, query);
      return envelope;
    },

    /** Update feed
   * Requires pinterest_oauth2: catalogs:read, catalogs:write; client_credentials: catalogs:read, catalogs:write. */
    async updateFeed(params: UpdateFeedParams): Promise<FeedsUpdateResponse> {
      const { feedId, body, ...query } = params;
      const envelope = await api.patch<FeedsUpdateResponse>(`/catalogs/feeds/${feedId}`, body);
      return envelope;
    },

    /** Delete feed
   * Requires pinterest_oauth2: catalogs:read, catalogs:write; client_credentials: catalogs:read, catalogs:write. */
    async deleteFeed(params: DeleteFeedParams): Promise<FeedsDeleteResponse> {
      const { feedId } = params;
      const envelope = await api.delete<FeedsDeleteResponse>(`/catalogs/feeds/${feedId}`);
      return envelope;
    },

    /** Ingest feed items
   * Requires pinterest_oauth2: catalogs:write. */
    async postFeedsIngest(params: PostFeedsIngestParams): Promise<FeedsIngestResponse> {
      const { feedId, ...rest } = params;
      const envelope = await api.post<FeedsIngestResponse>(`/catalogs/feeds/${feedId}/ingest`, undefined);
      return envelope;
    },

    /** List feed processing results
   * Requires pinterest_oauth2: catalogs:read. */
    async listFeedProcessingResults(params: ListFeedProcessingResultsParams): Promise<FeedProcessingResultsListResponse> {
      const { feedId, ...query } = params;
      const envelope = await api.get<FeedProcessingResultsListResponse>(`/catalogs/feeds/${feedId}/processing_results`, query);
      return envelope;
    },

    /** List item issues
   * Requires pinterest_oauth2: catalogs:read. */
    async listItemsIssues(params: ListItemsIssuesParams): Promise<ItemsIssuesListResponse> {
      const { processingResultId, ...query } = params;
      const envelope = await api.get<ItemsIssuesListResponse>(`/catalogs/processing_results/${processingResultId}/item_issues`, query);
      return envelope;
    },
  };
}
