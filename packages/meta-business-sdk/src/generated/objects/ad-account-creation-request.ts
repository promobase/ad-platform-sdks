import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AdAccountFields } from "./ad-account.ts";
import type { BusinessFields } from "./business.ts";
import type { UserFields } from "./user.ts";

export interface AdAccountCreationRequestFields {
  ad_accounts_currency: string;
  ad_accounts_info: Record<string, unknown>[];
  additional_comment: string;
  address_in_chinese: string;
  address_in_english: Record<string, unknown>;
  address_in_local_language: string;
  advertiser_business: BusinessFields;
  appeal_reason: Record<string, unknown>;
  business: BusinessFields;
  business_registration_id: string;
  chinese_legal_entity_name: string;
  contact: Record<string, unknown>;
  creator: UserFields;
  credit_card_id: string;
  disapproval_reasons: Record<string, unknown>[];
  english_legal_entity_name: string;
  extended_credit_id: string;
  id: string;
  is_smb: boolean;
  is_test: boolean;
  legal_entity_name_in_local_language: string;
  oe_request_id: string;
  official_website_url: string;
  planning_agency_business: BusinessFields;
  planning_agency_business_id: string;
  promotable_app_ids: string[];
  promotable_page_ids: string[];
  promotable_urls: string[];
  request_change_reasons: Record<string, unknown>[];
  status: string;
  subvertical: string;
  subvertical_v2: string;
  time_created: string;
  vertical: string;
  vertical_v2: string;
}

export function adAccountCreationRequestNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AdAccountCreationRequestFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdAccountCreationRequestFields, F[number]>>(`${id}`, opts),
    adaccounts: <F extends (keyof AdAccountFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<AdAccountFields, F[number]>>(client, `${id}/adaccounts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

