// @generated
// fingerprint: sha256:d9daaed1c1b25068a2a96de9c152fee8c7dbc237c815e2af6e32e3e37713db43
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
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
    __path: id,
    __brand: undefined as unknown as AppLinksFields,
    get: <F extends (keyof AppLinksFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<AppLinksFields, F[number]>>(`${id}`, opts),
  };
}

