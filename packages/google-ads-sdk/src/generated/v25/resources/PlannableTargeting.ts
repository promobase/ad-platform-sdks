// @generated
// fingerprint: sha256:bb1d438767fcebf2db228af5f746859b5677d4a178a9097e37fc57ec32087652
// DO NOT EDIT: generated file; changes will be overwritten.
import type { DeviceInfo, GenderInfo, ReachPlanAgeRange, ReachPlanNetwork, SurfaceTargetingCombinations, YouTubeSelectLineUpTargeting } from "../index.ts";

// Generated from google.ads.googleads.v25.services.PlannableTargeting. Do not edit by hand.
export interface PlannableTargeting {
  ageRanges?: ReachPlanAgeRange[];
  genders?: GenderInfo[];
  devices?: DeviceInfo[];
  networks?: ReachPlanNetwork[];
  youtubeSelectLineupTargeting?: YouTubeSelectLineUpTargeting;
  surfaceTargeting?: SurfaceTargetingCombinations;
}
