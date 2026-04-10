import type { ApiClient } from "@promobase/sdk-runtime";

export interface CalibratorExistingRuleFields {
  "7d_volume": number;
  creation_source: string;
  creation_time: string;
  creator: string;
  event_type: string;
  id: string;
  rule: string;
  rule_type: string;
  sample_urls: string[];
  status: string;
  transforms: string[];
}

export function calibratorExistingRuleNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof CalibratorExistingRuleFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CalibratorExistingRuleFields, F[number]>>(`${id}`, opts),
  };
}

