import type { AudienceTargeting, DeviceInfo, GenderInfo, ReachPlanAgeRange, ReachPlanNetwork } from "../index.ts";

// Generated from google.ads.googleads.v23.services.Targeting. Do not edit by hand.
export interface Targeting {
  plannableLocationId?: string;
  plannableLocationIds?: string[];
  ageRange?: ReachPlanAgeRange;
  genders?: GenderInfo[];
  devices?: DeviceInfo[];
  network?: ReachPlanNetwork;
  audienceTargeting?: AudienceTargeting;
}
