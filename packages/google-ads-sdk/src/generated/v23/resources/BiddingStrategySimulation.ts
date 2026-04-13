import type { SimulationModificationMethod, SimulationType, TargetCpaSimulationPointList, TargetRoasSimulationPointList } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.BiddingStrategySimulation. Do not edit by hand.
export interface BiddingStrategySimulation {
  resourceName?: string;
  biddingStrategyId?: string;
  type?: SimulationType;
  modificationMethod?: SimulationModificationMethod;
  startDate?: string;
  endDate?: string;
  targetCpaPointList?: TargetCpaSimulationPointList;
  targetRoasPointList?: TargetRoasSimulationPointList;
}
