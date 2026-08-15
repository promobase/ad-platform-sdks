// @generated
// fingerprint: sha256:97cc13536dc8f9d8ec1c62c6ed7167dbc6793e60c1f1238d36ca31a5ce4b8603
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for business_access_assets — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { AssetGroupCreateResponse, AssetGroupUpdateResponse, AssetGroupDeleteResponse, BusinessAssetsGetResponse, BusinessAssetMembersGetResponse, BusinessAssetPartnersGetResponse, BusinessMemberAssetsGetResponseEndpoint, BusinessMembersAssetAccessUpdateResponse, BusinessMembersAssetAccessDeleteResponse, BusinessPartnerAssetAccessGetResponse, UpdatePartnerAssetAccessHandlerImplResponse, DeletePartnerAssetAccessHandlerImplResponse } from "../types.ts";
import type { CreateAssetGroupParams, UpdateAssetGroupParams, DeleteAssetGroupParams, ListBusinessAssetsParams, ListBusinessAssetMembersParams, ListBusinessAssetPartnersParams, ListBusinessMemberAssetsParams, UpdateBusinessMembersAssetAccessParams, DeleteBusinessMembersAssetAccessParams, ListBusinessPartnerAssetAccessParams, PatchUpdatePartnerAssetAccessHandlerImplParams, DeleteDeletePartnerAssetAccessHandlerImplParams } from "../params.ts";

/** business_access_assets — 12 endpoints */
export function createBusinessAccessAssetsClient(api: PinterestApiClient) {
  return {
    /** Create a new asset group.
   * Requires pinterest_oauth2: biz_access:read, biz_access:write. */
    async createAssetGroup(params: CreateAssetGroupParams): Promise<AssetGroupCreateResponse> {
      const { businessId, ...rest } = params;
      const envelope = await api.post<AssetGroupCreateResponse>(`/businesses/${businessId}/asset_groups`, rest);
      return envelope;
    },

    /** Update asset groups.
   * Requires pinterest_oauth2: biz_access:read, biz_access:write. */
    async updateAssetGroup(params: UpdateAssetGroupParams): Promise<AssetGroupUpdateResponse> {
      const { businessId, ...rest } = params;
      const envelope = await api.patch<AssetGroupUpdateResponse>(`/businesses/${businessId}/asset_groups`, rest);
      return envelope;
    },

    /** Delete asset groups.
   * Requires pinterest_oauth2: biz_access:read, biz_access:write. */
    async deleteAssetGroup(params: DeleteAssetGroupParams): Promise<AssetGroupDeleteResponse> {
      const { businessId } = params;
      const envelope = await api.delete<AssetGroupDeleteResponse>(`/businesses/${businessId}/asset_groups`);
      return envelope;
    },

    /** List business assets
   * Requires pinterest_oauth2: biz_access:read. */
    async listBusinessAssets(params: ListBusinessAssetsParams): Promise<BusinessAssetsGetResponse> {
      const { businessId, ...query } = params;
      const envelope = await api.get<BusinessAssetsGetResponse>(`/businesses/${businessId}/assets`, query);
      return envelope;
    },

    /** Get members with access to asset
   * Requires pinterest_oauth2: biz_access:read. */
    async listBusinessAssetMembers(params: ListBusinessAssetMembersParams): Promise<BusinessAssetMembersGetResponse> {
      const { businessId, assetId, ...query } = params;
      const envelope = await api.get<BusinessAssetMembersGetResponse>(`/businesses/${businessId}/assets/${assetId}/members`, query);
      return envelope;
    },

    /** Get partners with access to asset
   * Requires pinterest_oauth2: biz_access:read. */
    async listBusinessAssetPartners(params: ListBusinessAssetPartnersParams): Promise<BusinessAssetPartnersGetResponse> {
      const { businessId, assetId, ...query } = params;
      const envelope = await api.get<BusinessAssetPartnersGetResponse>(`/businesses/${businessId}/assets/${assetId}/partners`, query);
      return envelope;
    },

    /** Get assets assigned to a member
   * Requires pinterest_oauth2: biz_access:read. */
    async listBusinessMemberAssets(params: ListBusinessMemberAssetsParams): Promise<BusinessMemberAssetsGetResponseEndpoint> {
      const { businessId, memberId, ...query } = params;
      const envelope = await api.get<BusinessMemberAssetsGetResponseEndpoint>(`/businesses/${businessId}/members/${memberId}/assets`, query);
      return envelope;
    },

    /** Assign/Update member asset permissions
   * Requires pinterest_oauth2: biz_access:write. */
    async updateBusinessMembersAssetAccess(params: UpdateBusinessMembersAssetAccessParams): Promise<BusinessMembersAssetAccessUpdateResponse> {
      const { businessId, ...rest } = params;
      const envelope = await api.patch<BusinessMembersAssetAccessUpdateResponse>(`/businesses/${businessId}/members/assets/access`, rest);
      return envelope;
    },

    /** Delete member access to asset
   * Requires pinterest_oauth2: biz_access:write. */
    async deleteBusinessMembersAssetAccess(params: DeleteBusinessMembersAssetAccessParams): Promise<BusinessMembersAssetAccessDeleteResponse> {
      const { businessId } = params;
      const envelope = await api.delete<BusinessMembersAssetAccessDeleteResponse>(`/businesses/${businessId}/members/assets/access`);
      return envelope;
    },

    /** Get assets assigned to a partner or assets assigned by a partner
   * Requires pinterest_oauth2: biz_access:read. */
    async listBusinessPartnerAssetAccess(params: ListBusinessPartnerAssetAccessParams): Promise<BusinessPartnerAssetAccessGetResponse> {
      const { businessId, partnerId, ...query } = params;
      const envelope = await api.get<BusinessPartnerAssetAccessGetResponse>(`/businesses/${businessId}/partners/${partnerId}/assets`, query);
      return envelope;
    },

    /** Assign/Update partner asset permissions
   * Requires pinterest_oauth2: biz_access:write. */
    async patchUpdatePartnerAssetAccessHandlerImpl(params: PatchUpdatePartnerAssetAccessHandlerImplParams): Promise<UpdatePartnerAssetAccessHandlerImplResponse> {
      const { businessId, ...rest } = params;
      const envelope = await api.patch<UpdatePartnerAssetAccessHandlerImplResponse>(`/businesses/${businessId}/partners/assets`, rest);
      return envelope;
    },

    /** Delete partner access to asset
   * Requires pinterest_oauth2: biz_access:write. */
    async deleteDeletePartnerAssetAccessHandlerImpl(params: DeleteDeletePartnerAssetAccessHandlerImplParams): Promise<DeletePartnerAssetAccessHandlerImplResponse> {
      const { businessId } = params;
      const envelope = await api.delete<DeletePartnerAssetAccessHandlerImplResponse>(`/businesses/${businessId}/partners/assets`);
      return envelope;
    },
  };
}
