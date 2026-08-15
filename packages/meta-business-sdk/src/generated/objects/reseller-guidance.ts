// @generated
// fingerprint: sha256:55fe7bc83ef70b2c63bc8ffc1a2663ea01195aaf1889ecb519c1f4588e3e3946
// DO NOT EDIT: generated file; changes will be overwritten.
import type { BusinessFields } from "./business.ts";

export interface ResellerGuidanceFields {
  ad_account_first_spend_date: string;
  ad_account_id: string;
  adopted_guidance_l7d: string[];
  advertiser_name: string;
  attributed_to_reseller_l7d: boolean;
  available_guidance: string[];
  guidance_adoption_rate_l7d: number;
  nurtured_by_reseller_l7d: boolean;
  planning_agency_name: string;
  recommendation_time: string;
  reporting_ds: string;
  reseller: BusinessFields;
  revenue_l30d: number;
  ultimate_advertiser_name: string;
}

