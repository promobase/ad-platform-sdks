import type { ApiClient } from "@promobase/sdk-runtime";
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
    get: <F extends (keyof BusinessFranchiseConfigFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BusinessFranchiseConfigFields, F[number]>>(`${id}`, opts),
  };
}

