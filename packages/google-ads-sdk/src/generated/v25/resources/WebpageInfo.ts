import type { WebpageConditionInfo, WebpageSampleInfo } from "../index.ts";

// Generated from google.ads.googleads.v25.common.WebpageInfo. Do not edit by hand.
export interface WebpageInfo {
  criterionName?: string;
  conditions?: WebpageConditionInfo[];
  coveragePercentage?: number;
  sample?: WebpageSampleInfo;
}
