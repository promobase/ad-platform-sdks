// @generated
// fingerprint: sha256:0653f890bb360869e51ed1bc70def9a0e954f90973c0d42807b761da32717fba
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { BusinessFields } from "./business.ts";

export interface BusinessAssetSharingAgreementFields {
  id: string;
  initiator: BusinessFields;
  recipient: BusinessFields;
  relationship_type: string[];
  request_status: string;
  request_type: string;
}

export interface BusinessAssetSharingAgreementUpdateParams {
  request_response?: string;
  [key: string]: unknown;
}

export function businessAssetSharingAgreementNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as BusinessAssetSharingAgreementFields,
    get: <F extends (keyof BusinessAssetSharingAgreementFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BusinessAssetSharingAgreementFields, F[number]>>(`${id}`, opts),
    update: (params: BusinessAssetSharingAgreementUpdateParams) =>
      client.post<BusinessAssetSharingAgreementFields>(`${id}`, params as Record<string, unknown>),
  };
}

