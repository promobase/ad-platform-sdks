import type { ApiClient } from "@promobase/sdk-runtime";

export interface ChinaBusinessOnboardingVettingRequestFields {
  ad_account_creation_request_status: string;
  ad_account_limit: number;
  ad_account_number: string;
  ad_accounts_info: Record<string, unknown>[];
  advertiser_business_id: string;
  advertiser_business_name: string;
  business_manager_id: string;
  business_registration: string;
  business_registration_id: string;
  business_verification_status: string;
  chinese_address: string;
  chinese_legal_entity_name: string;
  city: string;
  contact: string;
  coupon_code: string;
  disapprove_reason: string;
  english_business_name: string;
  id: string;
  official_website_url: string;
  org_ad_account_count: number;
  payment_type: string;
  planning_agency_id: string;
  planning_agency_name: string;
  promotable_app_ids: string[];
  promotable_page_ids: string[];
  promotable_pages: Record<string, unknown>[];
  promotable_urls: string[];
  request_changes_reason: string;
  reviewed_user: string;
  spend_limit: number;
  status: string;
  subvertical: string;
  subvertical_v2: string;
  supporting_document: string;
  time_changes_requested: string;
  time_created: string;
  time_updated: string;
  time_zone: string;
  used_reseller_link: boolean;
  user_id: string;
  user_name: string;
  vertical: string;
  vertical_v2: string;
  viewed_by_reseller: boolean;
  zip_code: string;
}

export function chinaBusinessOnboardingVettingRequestNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as ChinaBusinessOnboardingVettingRequestFields,
    get: <F extends (keyof ChinaBusinessOnboardingVettingRequestFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ChinaBusinessOnboardingVettingRequestFields, F[number]>>(`${id}`, opts),
  };
}

