// @generated
// fingerprint: sha256:d63522fcbfe59a86917f0bb4daaca2a7532c16f0ce814bd213ebbddb8ec02915
// DO NOT EDIT: generated file; changes will be overwritten.
import type { BusinessFields } from "./business.ts";

export interface AdAccountAdVolumeFields {
  actor_id: string;
  actor_name: string;
  ad_limit_scope_business: BusinessFields;
  ad_limit_scope_business_manager_id: string;
  ad_limit_set_by_page_admin: number;
  ads_running_or_in_review_count: number;
  ads_running_or_in_review_count_subject_to_limit_set_by_page: number;
  current_account_ads_running_or_in_review_count: number;
  future_limit_activation_date: string;
  future_limit_on_ads_running_or_in_review: number;
  limit_on_ads_running_or_in_review: number;
  recommendations: Record<string, unknown>[];
}

