// @generated
// fingerprint: sha256:7a7528241aeb99e40211ca7d348a8f6bfc0eab872cd847c2eeeb5c55b8fbfe86
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CpcBidSimulationPointList, PercentCpcBidSimulationPointList, SimulationModificationMethod, SimulationType } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.AdGroupCriterionSimulation. Do not edit by hand.
export interface AdGroupCriterionSimulation {
  resourceName?: string;
  adGroupId?: string;
  criterionId?: string;
  type?: SimulationType;
  modificationMethod?: SimulationModificationMethod;
  startDate?: string;
  endDate?: string;
  cpcBidPointList?: CpcBidSimulationPointList;
  percentCpcBidPointList?: PercentCpcBidSimulationPointList;
}
