// @generated
// fingerprint: sha256:703caf5706188961d5244d030b967f872dca3a2427287a219ca3ef1bb3f8571b
// DO NOT EDIT: generated file; changes will be overwritten.
import type { BudgetSimulationPointList, CpcBidSimulationPointList, SimulationModificationMethod, SimulationType, TargetCpaSimulationPointList, TargetImpressionShareSimulationPointList, TargetRoasSimulationPointList } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.CampaignSimulation. Do not edit by hand.
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
