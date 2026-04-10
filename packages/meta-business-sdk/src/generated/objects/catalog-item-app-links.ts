import type { AndroidAppLinkFields } from "./android-app-link.ts";
import type { IosAppLinkFields } from "./ios-app-link.ts";
import type { LinkFields } from "./link.ts";
import type { WebAppLinkFields } from "./web-app-link.ts";
import type { WindowsAppLinkFields } from "./windows-app-link.ts";
import type { WindowsPhoneAppLinkFields } from "./windows-phone-app-link.ts";

export interface CatalogItemAppLinksFields {
  android: AndroidAppLinkFields[];
  ios: IosAppLinkFields[];
  ipad: IosAppLinkFields[];
  iphone: IosAppLinkFields[];
  web: WebAppLinkFields;
  windows: WindowsAppLinkFields[];
  windows_phone: WindowsPhoneAppLinkFields[];
  windows_universal: WindowsAppLinkFields[];
}

