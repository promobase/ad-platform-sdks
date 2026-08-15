// @generated
// fingerprint: sha256:4cc665b504a8bc2bb96901fc34f5b6d6df33d20574a16a847237a2a0cdd529f9
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface DynamicPriceConfigByDateFields {
  checkin_date: string;
  prices: string;
  prices_pretty: Record<string, unknown>[];
}

export function dynamicPriceConfigByDateNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as DynamicPriceConfigByDateFields,
    get: <F extends (keyof DynamicPriceConfigByDateFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<DynamicPriceConfigByDateFields, F[number]>>(`${id}`, opts),
  };
}

