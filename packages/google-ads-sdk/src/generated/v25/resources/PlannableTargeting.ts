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
