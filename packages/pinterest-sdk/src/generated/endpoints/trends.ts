// Auto-generated client for trends — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { TrendsEditorialArticlesListResponse, TrendsProductCategoriesDetailsListResponse, TrendsProductCategoriesTrendingListResponse, TrendsFeaturedTopicsListResponse } from "../types.ts";
import type { ListTrendsEditorialArticlesParams, ListTrendsProductCategoriesDetailsParams, ListTrendsProductCategoriesTrendingParams, ListTrendsFeaturedTopicsParams } from "../params.ts";

/** trends — 4 endpoints */
export function createTrendsClient(api: PinterestApiClient) {
  return {
    /** Returns editorial articles for a given region
   * Requires pinterest_oauth2: user_accounts:read. */
    async listTrendsEditorialArticles(params: ListTrendsEditorialArticlesParams): Promise<TrendsEditorialArticlesListResponse> {
      const query = params;
      const envelope = await api.get<TrendsEditorialArticlesListResponse>(`/trends/editorial_articles`, query);
      return envelope;
    },

    /** Get product category details
   * Requires pinterest_oauth2: user_accounts:read; client_credentials: user_accounts:read. */
    async listTrendsProductCategoriesDetails(params: ListTrendsProductCategoriesDetailsParams): Promise<TrendsProductCategoriesDetailsListResponse> {
      const query = params;
      const envelope = await api.get<TrendsProductCategoriesDetailsListResponse>(`/trends/product_categories/details`, query);
      return envelope;
    },

    /** Get a list of growing Shopping Product Categories
   * Requires pinterest_oauth2: user_accounts:read; client_credentials: user_accounts:read. */
    async listTrendsProductCategoriesTrending(params: ListTrendsProductCategoriesTrendingParams): Promise<TrendsProductCategoriesTrendingListResponse> {
      const query = params;
      const envelope = await api.get<TrendsProductCategoriesTrendingListResponse>(`/trends/product_categories/trending`, query);
      return envelope;
    },

    /** Get featured topics
   * Requires pinterest_oauth2: user_accounts:read; client_credentials: user_accounts:read. */
    async listTrendsFeaturedTopics(params: ListTrendsFeaturedTopicsParams): Promise<TrendsFeaturedTopicsListResponse> {
      const query = params;
      const envelope = await api.get<TrendsFeaturedTopicsListResponse>(`/trends/topics/featured`, query);
      return envelope;
    },
  };
}
