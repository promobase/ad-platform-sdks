// @generated
// fingerprint: sha256:243995627a03465a76c7e8551ce1d019a2aacef6cbcdc79168a0734510a2ae41
// DO NOT EDIT: generated file; changes will be overwritten.
import type { DeviceInfo, GenderInfo, ReachPlanAgeRange, ReachPlanNetwork, SurfaceTargetingCombinations, YouTubeSelectLineUp, YouTubeSelectLineUpTargeting } from "../index.ts";

// Generated from google.ads.googleads.v23.services.PlannableTargeting. Do not edit by hand.
export interface PlannableTargeting {
  ageRanges?: ReachPlanAgeRange[];
  genders?: GenderInfo[];
  devices?: DeviceInfo[];
  networks?: ReachPlanNetwork[];
  youtubeSelectLineups?: YouTubeSelectLineUp[];
  youtubeSelectLineupTargeting?: YouTubeSelectLineUpTargeting;
  surfaceTargeting?: SurfaceTargetingCombinations;
}
