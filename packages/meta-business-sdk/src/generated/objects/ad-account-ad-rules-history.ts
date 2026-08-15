// @generated
// fingerprint: sha256:4a44812c3a8090a206ab607625c85fab1320a237623fc0d06d5b0aab4d9e4086
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdRuleEvaluationSpecFields } from "./ad-rule-evaluation-spec.ts";
import type { AdRuleExecutionSpecFields } from "./ad-rule-execution-spec.ts";
import type { AdRuleHistoryResultFields } from "./ad-rule-history-result.ts";
import type { AdRuleScheduleSpecFields } from "./ad-rule-schedule-spec.ts";

export interface AdAccountAdRulesHistoryFields {
  evaluation_spec: AdRuleEvaluationSpecFields;
  exception_code: number;
  exception_message: string;
  execution_spec: AdRuleExecutionSpecFields;
  is_manual: boolean;
  results: AdRuleHistoryResultFields[];
  rule_id: number;
  schedule_spec: AdRuleScheduleSpecFields;
  timestamp: string;
}

