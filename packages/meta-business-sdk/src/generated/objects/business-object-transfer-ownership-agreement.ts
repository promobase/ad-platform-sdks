// @generated
// fingerprint: sha256:6afce3dea27082e09628a774c98e908c8f7a26efa2d2c2c6c95cff697cb09019
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { BusinessFields } from "./business.ts";

export interface BusinessObjectTransferOwnershipAgreementFields {
  id: string;
  receiving_business: BusinessFields;
  requesting_business: BusinessFields;
  status: string;
}

export function businessObjectTransferOwnershipAgreementNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as BusinessObjectTransferOwnershipAgreementFields,
    get: <F extends (keyof BusinessObjectTransferOwnershipAgreementFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BusinessObjectTransferOwnershipAgreementFields, F[number]>>(`${id}`, opts),
  };
}

