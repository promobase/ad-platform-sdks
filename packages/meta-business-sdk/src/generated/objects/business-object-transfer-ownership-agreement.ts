import type { ApiClient } from "@promobase/sdk-runtime";
import type { BusinessFields } from "./business.ts";

export interface BusinessObjectTransferOwnershipAgreementFields {
  id: string;
  receiving_business: BusinessFields;
  requesting_business: BusinessFields;
  status: string;
}

export function businessObjectTransferOwnershipAgreementNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof BusinessObjectTransferOwnershipAgreementFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BusinessObjectTransferOwnershipAgreementFields, F[number]>>(`${id}`, opts),
  };
}

