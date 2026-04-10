import type { AdAssetFeedSpecAssetLabelFields } from "./ad-asset-feed-spec-asset-label.ts";

export interface AdAssetFeedSpecLinkURLFields {
  adlabels: AdAssetFeedSpecAssetLabelFields[];
  android_url: string;
  carousel_see_more_url: string;
  deeplink_url: string;
  display_url: string;
  ios_url: string;
  object_store_urls: string[];
  url_tags: string;
  website_url: string;
}

