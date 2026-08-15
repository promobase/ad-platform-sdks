// @generated
// fingerprint: sha256:fc24f3f24f1df041ef78d258d8bcdc315c9c251ce8d870d61fdc6302b10d760e
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdsActionStatsFields } from "./ads-action-stats.ts";

export interface AdKeywordStatsFields {
  actions: AdsActionStatsFields[];
  clicks: number;
  cost_per_total_action: number;
  cost_per_unique_click: number;
  cpc: number;
  cpm: number;
  cpp: number;
  ctr: number;
  frequency: number;
  id: string;
  impressions: number;
  name: string;
  reach: number;
  spend: number;
  total_actions: number;
  total_unique_actions: number;
  unique_actions: AdsActionStatsFields[];
  unique_clicks: number;
  unique_ctr: number;
  unique_impressions: number;
}

