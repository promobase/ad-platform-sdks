// Auto-generated client for business_access_invite — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { GetInvitesResponse, CreateMembershipOrPartnershipInvitesResponse, CancelInvitesOrRequestsResponse, CreateAssetInvitesResponse, AssetAccessRequestsCreateResponse, RespondBusinessAccessInvitesResponse } from "../types.ts";
import type { ListInvitesParams, PostCreateMembershipOrPartnershipInvitesParams, DeleteCancelInvitesOrRequestParams, PostCreateAssetInvitesParams, CreateAssetAccessRequestParams, PatchRespondBusinessAccessInvitesParams } from "../params.ts";

/** business_access_invite — 6 endpoints */
export function createBusinessAccessInviteClient(api: PinterestApiClient) {
  return {
    /** Get invites/requests
   * Requires pinterest_oauth2: biz_access:read. */
    async listInvites(params: ListInvitesParams): Promise<GetInvitesResponse> {
      const { businessId, ...query } = params;
      const envelope = await api.get<GetInvitesResponse>(`/businesses/${businessId}/invites`, query);
      return envelope;
    },

    /** Create invites or requests
   * Requires pinterest_oauth2: biz_access:write. */
    async postCreateMembershipOrPartnershipInvites(params: PostCreateMembershipOrPartnershipInvitesParams): Promise<CreateMembershipOrPartnershipInvitesResponse> {
      const { businessId, ...rest } = params;
      const envelope = await api.post<CreateMembershipOrPartnershipInvitesResponse>(`/businesses/${businessId}/invites`, rest);
      return envelope;
    },

    /** Cancel invites/requests
   * Requires pinterest_oauth2: biz_access:write. */
    async deleteCancelInvitesOrRequest(params: DeleteCancelInvitesOrRequestParams): Promise<CancelInvitesOrRequestsResponse> {
      const { businessId } = params;
      const envelope = await api.delete<CancelInvitesOrRequestsResponse>(`/businesses/${businessId}/invites`);
      return envelope;
    },

    /** Update invite/request with an asset permission
   * Requires pinterest_oauth2: biz_access:read, biz_access:write. */
    async postCreateAssetInvites(params: PostCreateAssetInvitesParams): Promise<CreateAssetInvitesResponse> {
      const { businessId, ...rest } = params;
      const envelope = await api.post<CreateAssetInvitesResponse>(`/businesses/${businessId}/invites/assets/access`, rest);
      return envelope;
    },

    /** Create a request to access an existing partner's assets.
   * Requires pinterest_oauth2: biz_access:read, biz_access:write. */
    async createAssetAccessRequest(params: CreateAssetAccessRequestParams): Promise<AssetAccessRequestsCreateResponse> {
      const { businessId, ...rest } = params;
      const envelope = await api.post<AssetAccessRequestsCreateResponse>(`/businesses/${businessId}/requests/assets/access`, rest);
      return envelope;
    },

    /** Accept or decline an invite/request
   * Requires pinterest_oauth2: biz_access:read, biz_access:write. */
    async patchRespondBusinessAccessInvites(params: PatchRespondBusinessAccessInvitesParams): Promise<RespondBusinessAccessInvitesResponse> {
      const rest = params;
      const envelope = await api.patch<RespondBusinessAccessInvitesResponse>(`/businesses/invites`, rest);
      return envelope;
    },
  };
}
