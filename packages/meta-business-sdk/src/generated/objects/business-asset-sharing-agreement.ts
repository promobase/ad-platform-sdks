import type { ApiClient } from "@promobase/sdk-runtime";
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

