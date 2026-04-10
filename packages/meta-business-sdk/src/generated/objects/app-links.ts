import type { ApiClient } from "@promobase/sdk-runtime";
import type { AndroidAppLinkFields } from "./android-app-link.ts";
import type { IosAppLinkFields } from "./ios-app-link.ts";
import type { LinkFields } from "./link.ts";
import type { WebAppLinkFields } from "./web-app-link.ts";
import type { WindowsAppLinkFields } from "./windows-app-link.ts";
import type { WindowsPhoneAppLinkFields } from "./windows-phone-app-link.ts";

export interface AppLinksFields {
  android: AndroidAppLinkFields[];
  id: string;
  ios: IosAppLinkFields[];
  ipad: IosAppLinkFields[];
  iphone: IosAppLinkFields[];
  web: WebAppLinkFields;
  windows: WindowsAppLinkFields[];
  windows_phone: WindowsPhoneAppLinkFields[];
  windows_universal: WindowsAppLinkFields[];
}

export function appLinksNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof AppLinksFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AppLinksFields, F[number]>>(`${id}`, opts),
  };
}

