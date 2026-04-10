import type { ApiClient } from "@promobase/sdk-runtime";

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

