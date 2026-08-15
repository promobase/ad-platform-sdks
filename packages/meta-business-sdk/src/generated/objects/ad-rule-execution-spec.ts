// @generated
// fingerprint: sha256:1e6283817ccde86c38050bb825c9660e54fe8652c0297978458f2d3f729f4e82
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { AdRuleExecutionOptionsFields } from "./ad-rule-execution-options.ts";
import type { AdRuleExecutionSpecExecutionType } from "../enums.ts";

export interface AdRuleExecutionSpecFields {
  execution_options: AdRuleExecutionOptionsFields[];
  execution_type: AdRuleExecutionSpecExecutionType;
  is_once_off: boolean;
}

export function adRuleExecutionSpecNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as AdRuleExecutionSpecFields,
    get: <F extends (keyof AdRuleExecutionSpecFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AdRuleExecutionSpecFields, F[number]>>(`${id}`, opts),
  };
}

