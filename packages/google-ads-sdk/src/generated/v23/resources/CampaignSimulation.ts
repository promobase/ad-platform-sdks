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
