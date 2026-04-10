export interface AnalyticsConfigFields {
  analytics_access_for_authorized_ad_account: boolean;
  breakdowns_config: Record<string, unknown>[];
  builtin_fields_config: Record<string, unknown>[];
  deprecated_events_config: Record<string, unknown>[];
  events_config: Record<string, unknown>[];
  ios_purchase_validation_secret: string;
  is_any_role_able_to_see_restricted_insights: boolean;
  is_implicit_purchase_logging_on_android_supported: boolean;
  is_implicit_purchase_logging_on_ios_supported: boolean;
  is_track_ios_app_uninstall_supported: boolean;
  journey_backfill_status: string;
  journey_conversion_events: string[];
  journey_enabled: boolean;
  journey_impacting_change_time: string;
  journey_timeout: string;
  latest_sdk_versions: Record<string, string>;
  log_android_implicit_purchase_events: boolean;
  log_automatic_analytics_events: boolean;
  log_implicit_purchase_events: boolean;
  prev_journey_conversion_events: string[];
  query_approximation_accuracy_level: string;
  query_currency: string;
  query_timezone: string;
  recent_events_update_time: string;
  session_timeout_interval: number;
  track_ios_app_uninstall: boolean;
}

