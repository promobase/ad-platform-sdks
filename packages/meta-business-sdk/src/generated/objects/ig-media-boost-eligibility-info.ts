// @generated
// fingerprint: sha256:35c874cded7c3d628b3e5ee882db3432eee6013cedd42c8dbcf0b5d5bfe04054
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface IGMediaBoostEligibilityInfoFields {
  boost_ineligible_reason: string;
  eligible_to_boost: boolean;
}

export function iGMediaBoostEligibilityInfoNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as IGMediaBoostEligibilityInfoFields,
    get: <F extends (keyof IGMediaBoostEligibilityInfoFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<IGMediaBoostEligibilityInfoFields, F[number]>>(`${id}`, opts),
  };
}

