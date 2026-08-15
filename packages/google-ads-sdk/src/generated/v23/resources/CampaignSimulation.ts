// @generated
// fingerprint: sha256:a9f39d82bf45e2e73bf81ed967971a5b94061ca1362a64dce453fe0ed272fc2d
// DO NOT EDIT: generated file; changes will be overwritten.
import type { BudgetSimulationPointList, CpcBidSimulationPointList, SimulationModificationMethod, SimulationType, TargetCpaSimulationPointList, TargetImpressionShareSimulationPointList, TargetRoasSimulationPointList } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.CampaignSimulation. Do not edit by hand.
export interface CampaignSimulation {
  resourceName?: string;
  campaignId?: string;
  type?: SimulationType;
  modificationMethod?: SimulationModificationMethod;
  startDate?: string;
  endDate?: string;
  cpcBidPointList?: CpcBidSimulationPointList;
  targetCpaPointList?: TargetCpaSimulationPointList;
  targetRoasPointList?: TargetRoasSimulationPointList;
  targetImpressionSharePointList?: TargetImpressionShareSimulationPointList;
  budgetPointList?: BudgetSimulationPointList;
}
