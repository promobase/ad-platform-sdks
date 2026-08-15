// @generated
// fingerprint: sha256:9abaeb1e5bbef6ff832ec22bc401cf9ddd309dc640152b5afd15cd2ff5510157
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdStrength, AssetCoverage, AssetGroupPrimaryStatus, AssetGroupPrimaryStatusReason, AssetGroupStatus, GoogleLocalServicesInfo } from "../index.ts";

// Generated from google.ads.googleads.v25.resources.AssetGroup. Do not edit by hand.
export interface AssetGroup {
  resourceName?: string;
  id?: string;
  campaign?: string;
  name?: string;
  finalUrls?: string[];
  finalMobileUrls?: string[];
  status?: AssetGroupStatus;
  primaryStatus?: AssetGroupPrimaryStatus;
  primaryStatusReasons?: AssetGroupPrimaryStatusReason[];
  path1?: string;
  path2?: string;
  adStrength?: AdStrength;
  assetCoverage?: AssetCoverage;
  googleLocalServicesInfo?: GoogleLocalServicesInfo;
}
