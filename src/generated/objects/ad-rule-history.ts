import type { AdRuleEvaluationSpecFields } from "./ad-rule-evaluation-spec.ts";
import type { AdRuleExecutionSpecFields } from "./ad-rule-execution-spec.ts";
import type { AdRuleHistoryResultFields } from "./ad-rule-history-result.ts";
import type { AdRuleScheduleSpecFields } from "./ad-rule-schedule-spec.ts";

export interface AdRuleHistoryFields {
  evaluation_spec: AdRuleEvaluationSpecFields;
  exception_code: number;
  exception_message: string;
  execution_spec: AdRuleExecutionSpecFields;
  is_manual: boolean;
  results: AdRuleHistoryResultFields[];
  schedule_spec: AdRuleScheduleSpecFields;
  timestamp: string;
}

