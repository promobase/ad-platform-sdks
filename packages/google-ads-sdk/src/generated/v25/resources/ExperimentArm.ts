import type { AssetGroupInfo, AssetTestingInfo, PerformanceMaxExperimentArmInfo } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.ExperimentArm. Do not edit by hand.
export interface ExperimentArm {
  resourceName?: string;
  experiment?: string;
  name?: string;
  control?: boolean;
  trafficSplit?: string;
  campaigns?: string[];
  inDesignCampaigns?: string[];
  assetTestingInfo?: AssetTestingInfo;
  assetGroups?: AssetGroupInfo[];
  performanceMaxExperimentArmInfo?: PerformanceMaxExperimentArmInfo;
}
