// @generated
// fingerprint: sha256:53f1efd8088c36ce3d14004c1308e2a0735ca973a7601a7fd485071a5aed3cc7
// DO NOT EDIT: generated file; changes will be overwritten.
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
