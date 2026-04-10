import type { ApiClient } from "@promobase/sdk-runtime";
import type { AdAccountFields } from "./ad-account.ts";
import type { ApplicationFields } from "./application.ts";
import type { BusinessFields } from "./business.ts";

export interface PartnerAccountLinkingFields {
  adaccount: AdAccountFields;
  app: ApplicationFields;
  business: BusinessFields;
  externalidentifier: string;
  externalidentifieruri: string;
  id: string;
  partnername: string;
  pixel: string;
}

export function partnerAccountLinkingNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as PartnerAccountLinkingFields,
    get: <F extends (keyof PartnerAccountLinkingFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PartnerAccountLinkingFields, F[number]>>(`${id}`, opts),
  };
}

