export interface GoogleBusinessProfileClientOptions {
  accessToken: string;
  fetch?: typeof fetch;
  signal?: AbortSignal;
  debug?: boolean;
  accountManagementBaseUrl?: string;
  businessInformationBaseUrl?: string;
  localPostsBaseUrl?: string;
  performanceBaseUrl?: string;
}

export interface GoogleBusinessProfileOAuthConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  fetch?: typeof fetch;
  signal?: AbortSignal;
}

export interface GoogleOAuthTokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token?: string;
  scope?: string;
  token_type: string;
  id_token?: string;
}

export interface BusinessAccount {
  name: string;
  accountName?: string;
  type?: "PERSONAL" | "LOCATION_GROUP" | "USER_GROUP" | "ORGANIZATION" | string;
  role?: string;
  verificationState?: string;
  vettedState?: string;
  accountNumber?: string;
  permissionLevel?: string;
}

export interface BusinessLocation {
  name: string;
  title?: string;
  storeCode?: string;
  languageCode?: string;
  websiteUri?: string;
  phoneNumbers?: { primaryPhone?: string; additionalPhones?: string[] };
  storefrontAddress?: Record<string, unknown>;
  metadata?: Record<string, unknown>;
  categories?: Record<string, unknown>;
  regularHours?: Record<string, unknown>;
}

export interface GoogleDate {
  year: number;
  month: number;
  day: number;
}

export interface GoogleTimeOfDay {
  hours?: number;
  minutes?: number;
  seconds?: number;
  nanos?: number;
}

export interface TimeInterval {
  startDate: GoogleDate;
  startTime?: GoogleTimeOfDay;
  endDate?: GoogleDate;
  endTime?: GoogleTimeOfDay;
}

export type LocalPostTopicType = "STANDARD" | "EVENT" | "OFFER" | "ALERT";
export type LocalPostActionType = "BOOK" | "ORDER" | "SHOP" | "LEARN_MORE" | "SIGN_UP" | "CALL";

export interface LocalPostMedia {
  mediaFormat: "PHOTO" | "VIDEO";
  sourceUrl: string;
  name?: string;
}

export interface LocalPost {
  name?: string;
  languageCode: string;
  summary?: string;
  topicType: LocalPostTopicType;
  callToAction?: { actionType: LocalPostActionType; url?: string };
  event?: { title: string; schedule: TimeInterval };
  offer?: {
    couponCode?: string;
    redeemOnlineUrl?: string;
    termsConditions?: string;
  };
  media?: LocalPostMedia[];
  createTime?: string;
  updateTime?: string;
  state?: string;
  searchUrl?: string;
}

export type DailyMetric =
  | "BUSINESS_IMPRESSIONS_DESKTOP_MAPS"
  | "BUSINESS_IMPRESSIONS_DESKTOP_SEARCH"
  | "BUSINESS_IMPRESSIONS_MOBILE_MAPS"
  | "BUSINESS_IMPRESSIONS_MOBILE_SEARCH"
  | "BUSINESS_CONVERSATIONS"
  | "BUSINESS_DIRECTION_REQUESTS"
  | "CALL_CLICKS"
  | "WEBSITE_CLICKS"
  | "BUSINESS_BOOKINGS"
  | "BUSINESS_FOOD_ORDERS"
  | "BUSINESS_FOOD_MENU_CLICKS";

export interface DailyMetricTimeSeries {
  dailyMetric?: DailyMetric;
  dailySubEntityType?: Record<string, unknown>;
  timeSeries?: { datedValues?: Array<{ date?: GoogleDate; value?: string }> };
}

export interface LocalPostMetricValue {
  metric?: "LOCAL_POST_VIEWS_SEARCH" | "LOCAL_POST_ACTIONS_CALL_TO_ACTION" | string;
  totalValue?: { value?: string };
}

export interface LocalPostMetrics {
  localPostName: string;
  metricValues?: LocalPostMetricValue[];
}
