// @generated
// fingerprint: sha256:a2375f715eb061d456b977784e37d6e2e37f91cdf2866d41e082b387152d4855
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface BusinessAgreementFields {
  id: string;
  request_status: string;
}

export interface BusinessAgreementUpdateParams {
  asset_id?: number;
  request_status?: string;
  [key: string]: unknown;
}

export function businessAgreementNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as BusinessAgreementFields,
    get: <F extends (keyof BusinessAgreementFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BusinessAgreementFields, F[number]>>(`${id}`, opts),
    update: (params: BusinessAgreementUpdateParams) =>
      client.post<BusinessAgreementFields>(`${id}`, params as Record<string, unknown>),
  };
}

