// @generated
// fingerprint: sha256:9a90b6956261aaae7b9a3a5cb0e3fdc6a408fe3e2e6ee4d995b3256dcc36b10c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { CpcBidSimulationPointList, CpvBidSimulationPointList, SimulationModificationMethod, SimulationType, TargetCpaSimulationPointList, TargetRoasSimulationPointList } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.AdGroupSimulation. Do not edit by hand.
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
