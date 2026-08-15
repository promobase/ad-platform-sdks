// @generated
// fingerprint: sha256:31ce1288f213b624834995ff5c7e34a90f731e7642a6d6c4420aa35bb8af1d45
// DO NOT EDIT: generated file; changes will be overwritten.
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
