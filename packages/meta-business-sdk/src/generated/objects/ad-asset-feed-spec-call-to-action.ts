import type { AdAssetFeedSpecAssetLabelFields } from "./ad-asset-feed-spec-asset-label.ts";
import type { AdCreativeLinkDataCallToActionValueFields } from "./ad-creative-link-data-call-to-action-value.ts";

export interface AdAssetFeedSpecCallToActionFields {
  adlabels: AdAssetFeedSpecAssetLabelFields[];
  type: string;
  value: AdCreativeLinkDataCallToActionValueFields;
}

