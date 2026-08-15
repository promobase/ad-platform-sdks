// @generated
// fingerprint: sha256:6800bac60645f95c732d7a49a565fb51de7d550e1289e979f75c088b59de1ccb
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { BusinessFields } from "./business.ts";
import type { BusinessAssetGroupFields } from "./business-asset-group.ts";
import type { GroupFields } from "./group.ts";

export interface BusinessFranchiseConfigFields {
  active_partner_count: number;
  agency_business: BusinessFields;
  agency_business_asset_group: BusinessAssetGroupFields;
  brand_name: string;
  business: BusinessFields;
  business_vertical: string;
  id: string;
  partner_count: number;
  pending_agency_business: string;
  program_count: number;
  shared_business_asset_group: BusinessAssetGroupFields;
  shared_creative_folder_count: number;
  shared_custom_audience_count: number;
}

export function businessFranchiseConfigNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as BusinessFranchiseConfigFields,
    get: <F extends (keyof BusinessFranchiseConfigFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BusinessFranchiseConfigFields, F[number]>>(`${id}`, opts),
  };
}

