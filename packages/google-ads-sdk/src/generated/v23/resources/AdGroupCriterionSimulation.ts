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
