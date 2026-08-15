// @generated
// fingerprint: sha256:4fe4b1ec9365a3597388b4ce6e974fed363a925689efe19e4ad385ae598dc5a0
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Catalog Feeds — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { CatalogFeedCreateParams, CatalogFeedCreateResponse, CatalogFeedGetParams, CatalogFeedGetResponse, CatalogFeedUpdateParams, CatalogFeedUpdateResponse, CatalogFeedDeleteParams, CatalogFeedDeleteResponse, CatalogFeedLogParams, CatalogFeedLogResponse, CatalogFeedSwitchParams, CatalogFeedSwitchResponse } from "../types/catalog-feeds.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createCatalogFeeds(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

  async function get<T>(path: string, params: Record<string, unknown>): Promise<T> {
    return tiktokRequest<T>({
      accessToken: opts.accessToken,
      baseUrl: opts.baseUrl ?? TT_API_BASE,
      fetch: opts.fetch,
    }, {
      method: "GET",
      path,
      query: params,
    });
  }

  async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
    return tiktokRequest<T>({
      accessToken: opts.accessToken,
      baseUrl: opts.baseUrl ?? TT_API_BASE,
      fetch: opts.fetch,
    }, {
      method: "POST",
      path,
      body,
    });
  }

  return {
    /** Create a feed */
    async createFeed(params: CatalogFeedCreateParams): Promise<CatalogFeedCreateResponse> {
      return post<CatalogFeedCreateResponse>("/open_api/v1.3/catalog/feed/create/", params as unknown as Record<string, unknown>);
    },

    /** Get feeds */
    async getFeed(params: CatalogFeedGetParams): Promise<CatalogFeedGetResponse> {
      return get<CatalogFeedGetResponse>("/open_api/v1.3/catalog/feed/get/", params as unknown as Record<string, unknown>);
    },

    /** Update a feed */
    async updateFeed(params: CatalogFeedUpdateParams): Promise<CatalogFeedUpdateResponse> {
      return post<CatalogFeedUpdateResponse>("/open_api/v1.3/catalog/feed/update/", params as unknown as Record<string, unknown>);
    },

    /** Delete a feed */
    async deleteFeed(params: CatalogFeedDeleteParams): Promise<CatalogFeedDeleteResponse> {
      return post<CatalogFeedDeleteResponse>("/open_api/v1.3/catalog/feed/delete/", params as unknown as Record<string, unknown>);
    },

    /** Get the log of a feed */
    async feedLog(params: CatalogFeedLogParams): Promise<CatalogFeedLogResponse> {
      return get<CatalogFeedLogResponse>("/open_api/v1.3/catalog/feed/log/", params as unknown as Record<string, unknown>);
    },

    /** Update the schedule status of a feed */
    async feedSwitch(params: CatalogFeedSwitchParams): Promise<CatalogFeedSwitchResponse> {
      return post<CatalogFeedSwitchResponse>("/open_api/v1.3/catalog/feed/switch/", params as unknown as Record<string, unknown>);
    },
  };
}
