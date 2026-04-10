import type { ApiClient } from "../../runtime/client.ts";
import type { HomeListingFields } from "./home-listing.ts";
import type { LeadGenPostSubmissionCheckResultFields } from "./lead-gen-post-submission-check-result.ts";
import type { LinkFields } from "./link.ts";
import type { UserLeadGenDisclaimerResponseFields } from "./user-lead-gen-disclaimer-response.ts";
import type { UserLeadGenFieldDataFields } from "./user-lead-gen-field-data.ts";
import type { VehicleFields } from "./vehicle.ts";

export interface LeadFields {
  ad_id: string;
  ad_name: string;
  adset_id: string;
  adset_name: string;
  campaign_id: string;
  campaign_name: string;
  created_time: string;
  custom_disclaimer_responses: UserLeadGenDisclaimerResponseFields[];
  field_data: UserLeadGenFieldDataFields[];
  form_id: string;
  home_listing: HomeListingFields;
  id: string;
  is_organic: boolean;
  partner_name: string;
  platform: string;
  post: LinkFields;
  post_submission_check_result: LeadGenPostSubmissionCheckResultFields;
  retailer_item_id: string;
  vehicle: VehicleFields;
}

export function leadNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof LeadFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<LeadFields, F[number]>>(`${id}`, opts),
    delete: () =>
      client.delete(`${id}`, {}),
  };
}

