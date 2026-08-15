// @generated
// fingerprint: sha256:d7c97314fc2cc8933d8609fa69171adca8e5d10002d3c2aa8cb3623b19b2f188
// DO NOT EDIT: generated file; changes will be overwritten.
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
