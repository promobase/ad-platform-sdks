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
