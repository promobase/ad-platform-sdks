import type { AdSetFields } from "./ad-set.ts";

export interface AdKpiShiftFields {
  ad_set: AdSetFields;
  cost_per_result_shift: number;
  enough_effective_days: boolean;
  result_indicator: string;
  result_shift: number;
  spend_shift: number;
}

