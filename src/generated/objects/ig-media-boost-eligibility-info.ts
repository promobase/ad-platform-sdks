import type { ApiClient } from "../../runtime/client.ts";

export interface IGMediaBoostEligibilityInfoFields {
  boost_ineligible_reason: string;
  eligible_to_boost: boolean;
}

export function iGMediaBoostEligibilityInfoNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof IGMediaBoostEligibilityInfoFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<IGMediaBoostEligibilityInfoFields, F[number]>>(`${id}`, opts),
  };
}

