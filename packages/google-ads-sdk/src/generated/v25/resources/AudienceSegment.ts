// @generated
// fingerprint: sha256:3c9b8b9933b17ddf8e452dd656301da228f0ae134a042176575c91b337d1045c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CustomAudienceSegment, DetailedDemographicSegment, LifeEventSegment, UserInterestSegment, UserListSegment } from "../index.ts";

// Generated from google.ads.googleads.v25.common.AudienceSegment. Do not edit by hand.
export interface AudienceSegment {
  userList?: UserListSegment;
  userInterest?: UserInterestSegment;
  lifeEvent?: LifeEventSegment;
  detailedDemographic?: DetailedDemographicSegment;
  customAudience?: CustomAudienceSegment;
}
