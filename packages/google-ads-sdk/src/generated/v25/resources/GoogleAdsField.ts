// @generated
// fingerprint: sha256:5aeae09cb80c2545bf1fb2a766d3d58652dedbe3e2bd5065bd8ab1d465bc0bce
// DO NOT EDIT: generated file; changes will be overwritten.
import type { GoogleAdsFieldCategory, GoogleAdsFieldDataType } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.GoogleAdsField. Do not edit by hand.
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
