// @generated
// fingerprint: sha256:740ac91c9381c4710834f94c66123c98a748ca2cefcd1ed18d1915e79fbf1e7f
// DO NOT EDIT: generated file; changes will be overwritten.
import type { SimulationModificationMethod, SimulationType, TargetCpaSimulationPointList, TargetRoasSimulationPointList } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.BiddingStrategySimulation. Do not edit by hand.
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
