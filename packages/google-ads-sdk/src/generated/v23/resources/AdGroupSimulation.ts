// @generated
// fingerprint: sha256:51f44d63919d0e73e73a28949767899b8cbc25364f26aceabab55e84694428c6
// DO NOT EDIT: generated file; changes will be overwritten.
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
