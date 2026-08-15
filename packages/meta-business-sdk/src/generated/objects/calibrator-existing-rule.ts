// @generated
// fingerprint: sha256:2bfe6d5339afa335751bdd93907c16fa50006559ba1b41cb975915e57863f2a5
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

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
    __path: id,
    __brand: undefined as unknown as CalibratorExistingRuleFields,
    get: <F extends (keyof CalibratorExistingRuleFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CalibratorExistingRuleFields, F[number]>>(`${id}`, opts),
  };
}

