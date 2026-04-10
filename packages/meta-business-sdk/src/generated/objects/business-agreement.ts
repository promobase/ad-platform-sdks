import type { ApiClient } from "@promobase/sdk-runtime";

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

