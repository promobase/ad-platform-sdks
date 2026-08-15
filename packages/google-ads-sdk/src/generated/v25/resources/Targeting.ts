// @generated
// fingerprint: sha256:97df4838c45c428ec4fb8523593adde997005a40bb6ae3255327aedd5dc654f5
// DO NOT EDIT: generated file; changes will be overwritten.
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
