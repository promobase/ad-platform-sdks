// Auto-generated client for audience_sharing — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { UpdateAdAccountToAdAccountSharedAudienceResponse, UpdateAdAccountToBusinessSharedAudienceResponse, AdAccountsAudiencesSharedAccountsListResponse, SharedAudiencesForBusinessListResponse, UpdateBusinessToAdAccountSharedAudienceResponse, UpdateBusinessToBusinessSharedAudienceResponse, BusinessAccountAudiencesSharedAccountsListResponse } from "../types.ts";
import type { PatchUpdateAdAccountToAdAccountSharedAudienceParams, PatchUpdateAdAccountToBusinessSharedAudienceParams, ListAdAccountsAudiencesSharedAccountsParams, ListSharedAudiencesForBusinessParams, PatchUpdateBusinessToAdAccountSharedAudienceParams, PatchUpdateBusinessToBusinessSharedAudienceParams, ListBusinessAccountAudiencesSharedAccountsParams } from "../params.ts";

/** audience_sharing — 7 endpoints */
export function createAudienceSharingClient(api: PinterestApiClient) {
  return {
    /** Update audience sharing between ad accounts
   * Requires pinterest_oauth2: ads:write. */
    async patchUpdateAdAccountToAdAccountSharedAudience(params: PatchUpdateAdAccountToAdAccountSharedAudienceParams): Promise<UpdateAdAccountToAdAccountSharedAudienceResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.patch<UpdateAdAccountToAdAccountSharedAudienceResponse>(`/ad_accounts/${adAccountId}/audiences/ad_accounts/shared`, rest);
      return envelope;
    },

    /** Update audience sharing from an ad account to businesses
   * Requires pinterest_oauth2: ads:write. */
    async patchUpdateAdAccountToBusinessSharedAudience(params: PatchUpdateAdAccountToBusinessSharedAudienceParams): Promise<UpdateAdAccountToBusinessSharedAudienceResponse> {
      const { adAccountId, ...rest } = params;
      const envelope = await api.patch<UpdateAdAccountToBusinessSharedAudienceResponse>(`/ad_accounts/${adAccountId}/audiences/businesses/shared`, rest);
      return envelope;
    },

    /** List accounts with access to an audience owned by an ad account
   * Requires pinterest_oauth2: ads:read; client_credentials: ads:read. */
    async listAdAccountsAudiencesSharedAccounts(params: ListAdAccountsAudiencesSharedAccountsParams): Promise<AdAccountsAudiencesSharedAccountsListResponse> {
      const { adAccountId, ...query } = params;
      const envelope = await api.get<AdAccountsAudiencesSharedAccountsListResponse>(`/ad_accounts/${adAccountId}/audiences/shared/accounts`, query);
      return envelope;
    },

    /** List received audiences for a business
   * Requires pinterest_oauth2: biz_access:read. */
    async listSharedAudiencesForBusiness(params: ListSharedAudiencesForBusinessParams): Promise<SharedAudiencesForBusinessListResponse> {
      const { businessId, ...query } = params;
      const envelope = await api.get<SharedAudiencesForBusinessListResponse>(`/businesses/${businessId}/audiences`, query);
      return envelope;
    },

    /** Update audience sharing from a business to ad accounts
   * Requires pinterest_oauth2: biz_access:write. */
    async patchUpdateBusinessToAdAccountSharedAudience(params: PatchUpdateBusinessToAdAccountSharedAudienceParams): Promise<UpdateBusinessToAdAccountSharedAudienceResponse> {
      const { businessId, ...rest } = params;
      const envelope = await api.patch<UpdateBusinessToAdAccountSharedAudienceResponse>(`/businesses/${businessId}/audiences/ad_accounts/shared`, rest);
      return envelope;
    },

    /** Update audience sharing between businesses
   * Requires pinterest_oauth2: biz_access:write. */
    async patchUpdateBusinessToBusinessSharedAudience(params: PatchUpdateBusinessToBusinessSharedAudienceParams): Promise<UpdateBusinessToBusinessSharedAudienceResponse> {
      const { businessId, ...rest } = params;
      const envelope = await api.patch<UpdateBusinessToBusinessSharedAudienceResponse>(`/businesses/${businessId}/audiences/businesses/shared`, rest);
      return envelope;
    },

    /** List accounts with access to an audience owned by a business
   * Requires pinterest_oauth2: biz_access:read. */
    async listBusinessAccountAudiencesSharedAccounts(params: ListBusinessAccountAudiencesSharedAccountsParams): Promise<BusinessAccountAudiencesSharedAccountsListResponse> {
      const { businessId, ...query } = params;
      const envelope = await api.get<BusinessAccountAudiencesSharedAccountsListResponse>(`/businesses/${businessId}/audiences/shared/accounts`, query);
      return envelope;
    },
  };
}
