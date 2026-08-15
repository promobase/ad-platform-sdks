// @generated
// fingerprint: sha256:b1a98a781f72f00e44d08b982a54946d2a7a951da7e0ca1b4492402cdf77db43
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import type { PageFields } from "./page.ts";

export interface CallAdsPhoneDataFields {
  call_ads_phone_data_use_case: string;
  callback_variant: string;
  destination_website_url: string;
  id: string;
  page: PageFields;
  phone_number: string;
}

export function callAdsPhoneDataNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as CallAdsPhoneDataFields,
    get: <F extends (keyof CallAdsPhoneDataFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CallAdsPhoneDataFields, F[number]>>(`${id}`, opts),
  };
}

