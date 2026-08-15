// @generated
// fingerprint: sha256:1054ea0a033516025c74a43bf8e7096b3f1245f5bf7f86be882d2d3fb9c61daf
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CpcBidSimulationPointList, PercentCpcBidSimulationPointList, SimulationModificationMethod, SimulationType } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.AdGroupCriterionSimulation. Do not edit by hand.
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
