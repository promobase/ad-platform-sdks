// @generated
// fingerprint: sha256:0136ce08bbecbeacac130a1ac3a7443990f322190917b033d2bb9eff95ab6bf5
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for conversion_tags — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { ConversionTagsCreateResponse, ConversionTagsListResponse, ConversionTagsGetResponse, OcpmEligibleConversionTagsGetResponse, PageVisitConversionTagsGetResponse } from "../types.ts";
import type { CreateConversionTagParams, ListConversionTagsParams, GetConversionTagsParams, GetOcpmEligibleConversionTagsParams, ListPageVisitConversionTagsParams } from "../params.ts";

/** conversion_tags — 5 endpoints */
export function createConversionTagsClient(api: PinterestApiClient) {
  return {
    /** Create conversion tag
   * Requires pinterest_oauth2: ads:write. */
    async createConversionTag(params: CreateConversionTagParams): Promise<ConversionTagsCreateResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.post<ConversionTagsCreateResponse>(`/ad_accounts/${adAccountId}/conversion_tags`, rest);
      return envelope;
    },

    /** List conversion tags
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async listConversionTags(params: ListConversionTagsParams): Promise<ConversionTagsListResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<ConversionTagsListResponse>(`/ad_accounts/${adAccountId}/conversion_tags`, query);
      return envelope;
    },

    /** Get conversion tag
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async getConversionTags(params: GetConversionTagsParams): Promise<ConversionTagsGetResponse> {
      const { adAccountId, conversionTagId, ...query } = params;
      const envelope = await api.get<ConversionTagsGetResponse>(`/ad_accounts/${adAccountId}/conversion_tags/${conversionTagId}`, query);
      return envelope;
    },

    /** Get Ocpm eligible conversion tags
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async getOcpmEligibleConversionTags(params: GetOcpmEligibleConversionTagsParams): Promise<OcpmEligibleConversionTagsGetResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<OcpmEligibleConversionTagsGetResponse>(`/ad_accounts/${adAccountId}/conversion_tags/ocpm_eligible`, query);
      return envelope;
    },

    /** Get page visit conversion tags
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async listPageVisitConversionTags(params: ListPageVisitConversionTagsParams): Promise<PageVisitConversionTagsGetResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<PageVisitConversionTagsGetResponse>(`/ad_accounts/${adAccountId}/conversion_tags/page_visit`, query);
      return envelope;
    },
  };
}
