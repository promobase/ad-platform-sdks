// Auto-generated client for Brand Safety Deny List Domains — do not edit
import type { AmazonAdsApiClient } from "../../../api-client.ts";
import type { DeleteBrandSafetyDenyListResponse, ListDomainsResponse, CreateBrandSafetyDenyListDomainsResponse } from "../types.ts";
import type { DeleteBrandSafetyDenyListParams, ListDomainsParams, CreateBrandSafetyDenyListDomainParams } from "../params.ts";

/** Brand Safety Deny List Domains — 3 endpoints */
export function createBrandSafetyDenyListDomainsClient(api: AmazonAdsApiClient) {
  return {
    /** Archives all of the domains in the Brand Safety Deny List. It can take several hours from the time a domain is deleted to the time it is reflected in the deny list. You can check the status of the delete request by calling GET /sd/brandSafety/{requestId}/status. If the status is "COMPLETED", you can call GET /sd/brandSafety/deny to validate that your deny list has been successfully deleted.
 */
    async deleteBrandSafetyDenyList(params: DeleteBrandSafetyDenyListParams): Promise<DeleteBrandSafetyDenyListResponse> {
      
      const envelope = await api.delete<DeleteBrandSafetyDenyListResponse>(`/sd/brandSafety/deny`);
      return envelope;
    },

    /** Gets a list of websites/apps that are on the advertiser's Brand Safety Deny List. */
    async listDomains(params: ListDomainsParams): Promise<ListDomainsResponse> {
      const query = params;
      const envelope = await api.get<ListDomainsResponse>(`/sd/brandSafety/deny`, query);
      return envelope;
    },

    /** Creates one or more domains to add to a Brand Safety Deny List. The Brand Safety Deny List is at the advertiser level. It can take up to 15 minutes from the time a domain is added to the time it is reflected in the deny list.
 */
    async createBrandSafetyDenyListDomain(params: CreateBrandSafetyDenyListDomainParams): Promise<CreateBrandSafetyDenyListDomainsResponse> {
      const rest = params;
      const envelope = await api.post<CreateBrandSafetyDenyListDomainsResponse>(`/sd/brandSafety/deny`, rest);
      return envelope;
    },
  };
}
