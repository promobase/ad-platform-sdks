import type { AudienceTargeting, DeviceInfo, GenderInfo, ReachPlanAgeRange, ReachPlanNetwork } from "../index.ts";

// Generated from google.ads.googleads.v25.services.Targeting. Do not edit by hand.
export interface Targeting {
  plannableLocationIds?: string[];
  ageRange?: ReachPlanAgeRange;
  genders?: GenderInfo[];
  devices?: DeviceInfo[];
  network?: ReachPlanNetwork;
  audienceTargeting?: AudienceTargeting;
}
