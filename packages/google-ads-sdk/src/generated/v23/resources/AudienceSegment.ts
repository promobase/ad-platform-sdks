import type { CustomAudienceSegment, DetailedDemographicSegment, LifeEventSegment, UserInterestSegment, UserListSegment } from "../index.ts";

// Generated from google.ads.googleads.v23.common.AudienceSegment. Do not edit by hand.
export interface AudienceSegment {
  userList?: UserListSegment;
  userInterest?: UserInterestSegment;
  lifeEvent?: LifeEventSegment;
  detailedDemographic?: DetailedDemographicSegment;
  customAudience?: CustomAudienceSegment;
}
