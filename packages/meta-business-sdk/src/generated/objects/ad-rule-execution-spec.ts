import type { ApiClient } from "@promobase/sdk-runtime";
import type { AdRuleExecutionOptionsFields } from "./ad-rule-execution-options.ts";

export interface AdRuleExecutionSpecFields {
  execution_options: AdRuleExecutionOptionsFields[];
  execution_type: string;
  is_once_off: boolean;
}

export function adRuleExecutionSpecNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AdRuleExecutionSpecFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdRuleExecutionSpecFields, F[number]>>(`${id}`, opts),
  };
}

