// @generated
// fingerprint: sha256:a8028faf5be8244699370755012fd525f5da78c9f28b359bb1ca7710aad2b9b5
// DO NOT EDIT: generated file; changes will be overwritten.
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
