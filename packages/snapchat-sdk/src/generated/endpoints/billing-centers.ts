// @generated
// fingerprint: sha256:e124b1918fb73f82cebd16557659481ecb124621ceacd5ae5b7d645f11d00182
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for billing-centers — do not edit
import type { SnapchatApiClient, SnapchatEnvelope } from "../../api-client.ts";
import { SnapchatCursor } from "../../pagination.ts";
import { extractEntities as unpack, nextLink } from "../../envelope.ts";
import { SnapchatApiError } from "../../errors.ts";
import type { FileInput } from "../../api-client.ts";
import type { Billingcenter, ListBillingcentersParams, GetBillingcenterParams, CreateBillingcenterParams, UpdateBillingcenterParams } from "../types/billing-centers.ts";

function ensureOne<T>(items: T[], label: string): T {
  const item = items[0];
  if (item === undefined) throw new SnapchatApiError({ message: `Snapchat ${label} not found`, status: 404 });
  return item;
}

/** Ads API — billing-centers */
export function createBillingCentersClient(api: SnapchatApiClient) {
  return {
    /** Example - Retrieving all Billing Centers ​ */
    listBillingcenters(params: ListBillingcentersParams): SnapchatCursor<Billingcenter> {
      const { organizationId, ...query } = params;
      return new SnapchatCursor((link) =>
        api.get<SnapchatEnvelope & Record<string, unknown>>(link ?? `/organizations/${organizationId}/billingcenters`, link ? undefined : query).then((envelope) => ({
          items: unpack<Billingcenter>(envelope, "billingcenters", "billingcenter"),
          nextLink: nextLink(envelope),
        })),
      );
    },

    /** Example - Retrieving a specific Billing Center ​ */
    async getBillingcenter(params: GetBillingcenterParams): Promise<Billingcenter> {
      const { billingCenterId, ...query } = params;
      const envelope = await api.get<SnapchatEnvelope & Record<string, unknown>>(`/billingcenters/${billingCenterId}`, query);
      return ensureOne<Billingcenter>(unpack<Billingcenter>(envelope, "billingcenters", "billingcenter"), "Billingcenter");
    },

    /** Example - Creating a Billing Center ​ */
    async createBillingcenter(params: CreateBillingcenterParams): Promise<Billingcenter> {
      const { organizationId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/organizations/${organizationId}/billingcenters`, { billingcenters: [{ ...rest }] });
      return ensureOne<Billingcenter>(unpack<Billingcenter>(envelope, "billingcenters", "billingcenter"), "Billingcenter");
    },

    /** Example - Updating a Billing Center ​ */
    async updateBillingcenter(params: UpdateBillingcenterParams): Promise<Billingcenter> {
      const { organizationId, ...rest } = params;
      const envelope = await api.post<SnapchatEnvelope & Record<string, unknown>>(`/organizations/${organizationId}/billingcenters`, rest);
      return ensureOne<Billingcenter>(unpack<Billingcenter>(envelope, "billingcenters", "billingcenter"), "Billingcenter");
    },
  };
}
