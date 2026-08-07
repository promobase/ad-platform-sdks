// Auto-generated types for snap-app-id — do not edit

export interface MobileApp {
  id: string;
  updated_at: string;
  created_at: string;
  container_kind: string;
  container_id: string;
  name: string;
  visible_to: unknown[];
  ios_app_id: string;
  ios_app_id_verified: boolean;
  android_app_url: string;
  android_app_url_verified: boolean;
}


export interface ListMobileAppsParams {
  organizationId: string;
  limit?: string;
}


export interface ListMobileApps2Params {
  adaccountId: string;
}


export interface GetMobileAppParams {
  mobileAppId: string;
}
