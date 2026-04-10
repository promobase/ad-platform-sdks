import type { ApiClient } from "@promobase/sdk-runtime";
import type { ApplicationFields } from "./application.ts";
import type { PageFields } from "./page.ts";

export interface PageCallToActionFields {
  android_app: ApplicationFields;
  android_deeplink: string;
  android_destination_type: string;
  android_package_name: string;
  android_url: string;
  created_time: string;
  email_address: string;
  from: PageFields;
  id: string;
  intl_number_with_plus: string;
  iphone_app: ApplicationFields;
  iphone_deeplink: string;
  iphone_destination_type: string;
  iphone_url: string;
  status: string;
  type: string;
  updated_time: string;
  web_destination_type: string;
  web_url: string;
}

export interface PageCallToActionUpdateParams {
  android_app_id?: number;
  android_destination_type?: string;
  android_package_name?: string;
  android_url?: string;
  email_address?: string;
  intl_number_with_plus?: string;
  iphone_app_id?: number;
  iphone_destination_type?: string;
  iphone_url?: string;
  type?: string;
  web_destination_type?: string;
  web_url?: string;
  [key: string]: unknown;
}

export function pageCallToActionNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof PageCallToActionFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PageCallToActionFields, F[number]>>(`${id}`, opts),
    update: (params: PageCallToActionUpdateParams) =>
      client.post<PageCallToActionFields>(`${id}`, params as Record<string, unknown>),
    delete: () =>
      client.delete(`${id}`, {}),
  };
}

