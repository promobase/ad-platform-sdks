import type { GoogleAdsFieldCategory, GoogleAdsFieldDataType } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.GoogleAdsField. Do not edit by hand.
export interface GoogleAdsField {
  resourceName?: string;
  name?: string;
  category?: GoogleAdsFieldCategory;
  selectable?: boolean;
  filterable?: boolean;
  sortable?: boolean;
  selectableWith?: string[];
  attributeResources?: string[];
  metrics?: string[];
  segments?: string[];
  enumValues?: string[];
  dataType?: GoogleAdsFieldDataType;
  typeUrl?: string;
  isRepeated?: boolean;
}
