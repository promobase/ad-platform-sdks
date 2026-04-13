import type { CpcBidSimulationPointList, CpvBidSimulationPointList, SimulationModificationMethod, SimulationType, TargetCpaSimulationPointList, TargetRoasSimulationPointList } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.AdGroupSimulation. Do not edit by hand.
export interface AdGroupSimulation {
  resourceName?: string;
  adGroupId?: string;
  type?: SimulationType;
  modificationMethod?: SimulationModificationMethod;
  startDate?: string;
  endDate?: string;
  cpcBidPointList?: CpcBidSimulationPointList;
  cpvBidPointList?: CpvBidSimulationPointList;
  targetCpaPointList?: TargetCpaSimulationPointList;
  targetRoasPointList?: TargetRoasSimulationPointList;
}
