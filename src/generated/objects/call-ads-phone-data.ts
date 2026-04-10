import type { ApiClient } from "../../runtime/client.ts";
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
    get: <F extends (keyof CallAdsPhoneDataFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<CallAdsPhoneDataFields, F[number]>>(`${id}`, opts),
  };
}

