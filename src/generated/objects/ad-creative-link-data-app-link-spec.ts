import type { AndroidAppLinkFields } from "./android-app-link.ts";
import type { IosAppLinkFields } from "./ios-app-link.ts";
import type { LinkFields } from "./link.ts";

export interface AdCreativeLinkDataAppLinkSpecFields {
  android: AndroidAppLinkFields[];
  ios: IosAppLinkFields[];
  ipad: IosAppLinkFields[];
  iphone: IosAppLinkFields[];
}

