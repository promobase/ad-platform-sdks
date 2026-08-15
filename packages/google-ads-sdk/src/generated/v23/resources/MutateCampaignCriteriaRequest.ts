// @generated
// fingerprint: sha256:ba5c221585e5e34938aef4e42997d8656311551ca4fb28c05e47bd23a518d089
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CampaignCriterionOperation, ResponseContentType } from "../index.ts";

// Generated from google.ads.googleads.v23.services.MutateCampaignCriteriaRequest. Do not edit by hand.
export interface MutateCampaignCriteriaRequest {
  customerId?: string;
  operations?: CampaignCriterionOperation[];
  partialFailure?: boolean;
  validateOnly?: boolean;
  responseContentType?: ResponseContentType;
}
