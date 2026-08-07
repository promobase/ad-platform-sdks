// Auto-generated client for business_access_relationships — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { BrandAccountsCreateResponse, BrandAccountsUpdateResponse, GetBusinessMembersResponse, DeleteBusinessMembershipResponse, UpdateBusinessMembershipsResponseEndpoint, GetBusinessPartnersResponse, DeleteBusinessPartnersResponse, GetBusinessEmployersResponse } from "../types.ts";
import type { CreateBrandAccountParams, UpdateBrandAccountParams, ListBusinessMembersParams, DeleteDeleteBusinessMembershipParams, UpdateBusinessMembershipParams, ListBusinessPartnersParams, DeleteDeleteBusinessPartnerParams, UpdateSystemUserParams, ListBusinessEmployersParams } from "../params.ts";

/** business_access_relationships — 9 endpoints */
export function createBusinessAccessRelationshipsClient(api: PinterestApiClient) {
  return {
    /** Create a Brand Account
   * Requires pinterest_oauth2: biz_access:read, biz_access:write. */
    async createBrandAccount(params: CreateBrandAccountParams): Promise<BrandAccountsCreateResponse> {
      const { businessHierarchyId, ...rest } = params;
      const envelope = await api.post<BrandAccountsCreateResponse>(`/business_access/business_hierarchy/${businessHierarchyId}/brand_accounts`, rest);
      return envelope;
    },

    /** Update a Brand Account
   * Requires pinterest_oauth2: biz_access:read, biz_access:write. */
    async updateBrandAccount(params: UpdateBrandAccountParams): Promise<BrandAccountsUpdateResponse> {
      const { brandAccountId, businessHierarchyId, ...rest } = params;
      const envelope = await api.patch<BrandAccountsUpdateResponse>(`/business_access/business_hierarchy/${businessHierarchyId}/brand_accounts/${brandAccountId}`, rest);
      return envelope;
    },

    /** Get business members
   * Requires pinterest_oauth2: biz_access:read. */
    async listBusinessMembers(params: ListBusinessMembersParams): Promise<GetBusinessMembersResponse> {
      const { businessId, ...query } = params;
      const envelope = await api.get<GetBusinessMembersResponse>(`/businesses/${businessId}/members`, query);
      return envelope;
    },

    /** Terminate business memberships
   * Requires pinterest_oauth2: biz_access:read, biz_access:write. */
    async deleteDeleteBusinessMembership(params: DeleteDeleteBusinessMembershipParams): Promise<DeleteBusinessMembershipResponse> {
      const { businessId } = params;
      const envelope = await api.delete<DeleteBusinessMembershipResponse>(`/businesses/${businessId}/members`);
      return envelope;
    },

    /** Update member's business role
   * Requires pinterest_oauth2: biz_access:write. */
    async updateBusinessMembership(params: UpdateBusinessMembershipParams): Promise<UpdateBusinessMembershipsResponseEndpoint> {
      const { businessId, body, ...query } = params;
      const envelope = await api.patch<UpdateBusinessMembershipsResponseEndpoint>(`/businesses/${businessId}/members`, body);
      return envelope;
    },

    /** Get business partners
   * Requires pinterest_oauth2: biz_access:read. */
    async listBusinessPartners(params: ListBusinessPartnersParams): Promise<GetBusinessPartnersResponse> {
      const { businessId, ...query } = params;
      const envelope = await api.get<GetBusinessPartnersResponse>(`/businesses/${businessId}/partners`, query);
      return envelope;
    },

    /** Terminate business partnerships
   * Requires pinterest_oauth2: biz_access:write. */
    async deleteDeleteBusinessPartner(params: DeleteDeleteBusinessPartnerParams): Promise<DeleteBusinessPartnersResponse> {
      const { businessId } = params;
      const envelope = await api.delete<DeleteBusinessPartnersResponse>(`/businesses/${businessId}/partners`);
      return envelope;
    },

    /** Update a system user information.
   * Requires pinterest_oauth2: biz_access:read, biz_access:write. */
    async updateSystemUser(params: UpdateSystemUserParams): Promise<unknown> {
      const { businessId, systemUserId, ...rest } = params;
      const envelope = await api.patch<unknown>(`/businesses/${businessId}/system_users/${systemUserId}`, rest);
      return envelope;
    },

    /** List business employers for user
   * Requires pinterest_oauth2: biz_access:read. */
    async listBusinessEmployers(params: ListBusinessEmployersParams): Promise<GetBusinessEmployersResponse> {
      const query = params;
      const envelope = await api.get<GetBusinessEmployersResponse>(`/businesses/employers`, query);
      return envelope;
    },
  };
}
