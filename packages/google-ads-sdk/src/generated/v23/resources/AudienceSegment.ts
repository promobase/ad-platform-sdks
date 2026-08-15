// @generated
// fingerprint: sha256:5a8870b7db97e712a5bceaf27252986615c68c0743cb4b7eed532be43ca07147
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CustomAudienceSegment, DetailedDemographicSegment, LifeEventSegment, UserInterestSegment, UserListSegment } from "../index.ts";

// Generated from google.ads.googleads.v23.common.AudienceSegment. Do not edit by hand.
export interface AudienceSegment {
  userList?: UserListSegment;
  userInterest?: UserInterestSegment;
  lifeEvent?: LifeEventSegment;
  detailedDemographic?: DetailedDemographicSegment;
  customAudience?: CustomAudienceSegment;
}
