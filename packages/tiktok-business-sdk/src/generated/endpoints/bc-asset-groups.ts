// @generated
// fingerprint: sha256:6d3d0e568f654fbf59816aa063ea57075469334115db87360bc21f7f3a270421
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for BC Asset Groups — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { BcAssetGroupCreateParams, BcAssetGroupCreateResponse, BcAssetGroupUpdateParams, BcAssetGroupUpdateResponse, BcAssetGroupListParams, BcAssetGroupListResponse, BcAssetGroupGetParams, BcAssetGroupGetResponse, BcAssetGroupDeleteParams, BcAssetGroupDeleteResponse } from "../types/bc-asset-groups.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createBcAssetGroups(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Create an Asset Group  */
    async createAssetGroup(params: BcAssetGroupCreateParams): Promise<BcAssetGroupCreateResponse> {
      return post<BcAssetGroupCreateResponse>("/open_api/v1.3/bc/asset_group/create/", params as unknown as Record<string, unknown>);
    },

    /** Update an Asset Group */
    async updateAssetGroup(params: BcAssetGroupUpdateParams): Promise<BcAssetGroupUpdateResponse> {
      return post<BcAssetGroupUpdateResponse>("/open_api/v1.3/bc/asset_group/update/", params as unknown as Record<string, unknown>);
    },

    /** Get all Asset Groups */
    async listAssetGroup(params: BcAssetGroupListParams): Promise<BcAssetGroupListResponse> {
      return get<BcAssetGroupListResponse>("/open_api/v1.3/bc/asset_group/list/", params as unknown as Record<string, unknown>);
    },

    /** Get the details of an Asset Group */
    async getAssetGroup(params: BcAssetGroupGetParams): Promise<BcAssetGroupGetResponse> {
      return get<BcAssetGroupGetResponse>("/open_api/v1.3/bc/asset_group/get/", params as unknown as Record<string, unknown>);
    },

    /** Delete Asset Groups  */
    async deleteAssetGroup(params: BcAssetGroupDeleteParams): Promise<BcAssetGroupDeleteResponse> {
      return post<BcAssetGroupDeleteResponse>("/open_api/v1.3/bc/asset_group/delete/", params as unknown as Record<string, unknown>);
    },
  };
}
