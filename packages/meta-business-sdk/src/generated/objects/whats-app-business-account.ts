import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { AssignedUserFields } from "./assigned-user.ts";
import type { BusinessFields } from "./business.ts";
import type { CTXPartnerAppWelcomeMessageFlowFields } from "./ctx-partner-app-welcome-message-flow.ts";
import type { CommerceMerchantSettingsFields } from "./commerce-merchant-settings.ts";
import type { DatasetFields } from "./dataset.ts";
import type { ProductCatalogFields } from "./product-catalog.ts";
import type { WhatsAppBusinessHealthStatusForMessageSendFields } from "./whats-app-business-health-status-for-message-send.ts";

export interface WhatsAppBusinessAccountFields {
  account_review_status: string;
  analytics: Record<string, unknown>;
  auth_international_rate_eligibility: Record<string, unknown>;
  business_verification_status: string;
  country: string;
  creation_time: number;
  currency: string;
  disable_marketing_messages_on_cloud_api: boolean;
  health_status: WhatsAppBusinessHealthStatusForMessageSendFields;
  id: string;
  is_enabled_for_insights: boolean;
  is_shared_with_partners: boolean;
  linked_commerce_account: CommerceMerchantSettingsFields;
  marketing_messages_lite_api_status: string;
  marketing_messages_onboarding_status: string;
  message_template_namespace: string;
  name: string;
  on_behalf_of_business_info: Record<string, unknown>;
  owner_business: BusinessFields;
  owner_business_info: Record<string, unknown>;
  ownership_type: string;
  primary_business_location: string;
  primary_funding_id: string;
  purchase_order_number: string;
  status: string;
  template_auto_archival_enabled: boolean;
  timezone_id: string;
  whatsapp_business_manager_messaging_limit: string;
}

export interface WhatsAppBusinessAccountDeleteAssignedUsersParams {
  user: number;
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountListAssignedUsersParams {
  business: string;
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountCreateAssignedUsersParams {
  tasks: string[];
  user: number;
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountCreateBusinessMessagingFeatureStatusParams {
  features: Record<string, unknown>[];
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountListCallAnalyticsParams {
  country_codes?: string[];
  dimensions?: string[];
  directions?: string[];
  end: number;
  granularity: string;
  metric_types?: string[];
  phone_numbers?: string[];
  start: number;
  tiers?: string[];
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountListConversationAnalyticsParams {
  conversation_categories?: string[];
  conversation_directions?: string[];
  conversation_types?: string[];
  country_codes?: string[];
  dimensions?: string[];
  end: number;
  granularity: string;
  metric_types?: string[];
  phone_numbers?: string[];
  start: number;
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountCreateDatasetParams {
  dataset_name?: string;
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountCreateFlowsParams {
  categories: string[];
  clone_flow_id?: string;
  endpoint_uri?: string;
  flow_json?: string;
  name: string;
  publish?: boolean;
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountCreateGeneratePaymentConfigurationOauthLinkParams {
  configuration_name: string;
  redirect_url?: string;
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountListGroupAnalyticsParams {
  end: string;
  granularity?: string;
  group_ids: string[];
  metric_types?: string[];
  start: string;
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountCreateMessageSamplesParams {
  interactive?: Record<string, unknown>;
  text?: Record<string, unknown>;
  type: string;
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountListMessageTemplatePreviewsParams {
  add_security_recommendation?: boolean;
  business_name?: string;
  button_types?: string[];
  category: string;
  code_expiration_minutes?: number;
  languages?: string[];
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountDeleteMessageTemplatesParams {
  hsm_id?: string;
  hsm_ids?: string[];
  name?: string;
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountListMessageTemplatesParams {
  category?: string[];
  content?: string;
  language?: string[];
  name?: string;
  name_or_content?: string;
  quality_score?: string[];
  since?: string;
  source?: string;
  status?: string[];
  until?: string;
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountCreateMessageTemplatesParams {
  allow_category_change?: boolean;
  bid_spec?: Record<string, unknown>;
  category: string;
  components?: Record<string, unknown>[];
  creative_sourcing_spec?: Record<string, unknown>;
  cta_url_link_tracking_opted_out?: boolean;
  degrees_of_freedom_spec?: Record<string, unknown>;
  display_format?: string;
  language: string;
  library_template_body_inputs?: Record<string, unknown>;
  library_template_button_inputs?: Record<string, unknown>[];
  library_template_name?: string;
  message_send_ttl_seconds?: number;
  name: string;
  parameter_format?: string;
  send_type?: string;
  sub_category?: string;
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountCreateMigrateFlowsParams {
  source_flow_names?: string[];
  source_waba_id: string;
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountCreateMigrateMessageTemplatesParams {
  count?: number;
  page_number?: number;
  source_waba_id: string;
  template_ids?: string[];
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountDeletePaymentConfigurationParams {
  configuration_name: string;
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountListPaymentConfigurationParams {
  configuration_name: string;
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountCreatePaymentConfigurationParams {
  configuration_name: string;
  data_endpoint_url?: string;
  merchant_category_code?: string;
  merchant_vpa?: string;
  provider_name?: string;
  purpose_code?: string;
  redirect_url?: string;
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountCreatePhoneNumbersParams {
  cc?: string;
  migrate_phone_number?: boolean;
  phone_number?: string;
  preverified_id?: string;
  verified_name?: string;
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountListPricingAnalyticsParams {
  country_codes?: string[];
  dimensions?: string[];
  end: number;
  granularity: string;
  metric_types?: string[];
  phone_numbers?: string[];
  pricing_categories?: string[];
  pricing_types?: string[];
  start: number;
  tiers?: string[];
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountDeleteProductCatalogsParams {
  catalog_id: string;
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountCreateProductCatalogsParams {
  catalog_id: string;
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountCreateSetOboMobilityIntentParams {
  solution_id?: string;
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountCreateSetSolutionMigrationIntentParams {
  app_id?: string;
  solution_id?: string;
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountCreateSubscribedAppsParams {
  override_callback_uri?: string;
  verify_token?: string;
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountListTemplateAnalyticsParams {
  end: string;
  granularity: string;
  metric_types?: string[];
  product_type?: string;
  start: string;
  template_ids: string[];
  use_waba_timezone?: boolean;
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountListTemplateGroupAnalyticsParams {
  end: string;
  granularity: string;
  metric_types?: string[];
  start: string;
  template_group_ids: string[];
  use_waba_timezone?: boolean;
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountCreateTemplateGroupsParams {
  description: string;
  name: string;
  whatsapp_business_templates: string[];
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountListTemplatePerformanceMetricsParams {
  name?: string;
  template_id?: string;
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountCreateUpsertMessageTemplatesParams {
  category: string;
  components: Record<string, unknown>[];
  languages: string[];
  message_send_ttl_seconds?: number;
  name: string;
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountDeleteWelcomeMessageSequencesParams {
  sequence_id: string;
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountListWelcomeMessageSequencesParams {
  app_id?: string;
  sequence_id?: string;
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountCreateWelcomeMessageSequencesParams {
  name?: string;
  sequence_id?: string;
  welcome_message_sequence?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface WhatsAppBusinessAccountUpdateParams {
  degrees_of_freedom_spec?: Record<string, unknown>;
  disable_marketing_messages_on_cloud_api?: boolean;
  is_enabled_for_insights?: boolean;
  template_auto_archival_enabled?: boolean;
  [key: string]: unknown;
}

export function whatsAppBusinessAccountNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as WhatsAppBusinessAccountFields,
    get: <F extends (keyof WhatsAppBusinessAccountFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<WhatsAppBusinessAccountFields, F[number]>>(`${id}`, opts),
    update: (params: WhatsAppBusinessAccountUpdateParams) =>
      client.post<WhatsAppBusinessAccountFields>(`${id}`, params as Record<string, unknown>),
    activities: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/activities`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    assignedUsers: {
      __path: `${id}/assigned_users`,
      __brand: undefined as unknown as AssignedUserFields,
      list: <F extends (keyof AssignedUserFields)[]>(opts: { fields: F; params?: WhatsAppBusinessAccountListAssignedUsersParams }) =>
        new Cursor<Pick<AssignedUserFields, F[number]>>(client, `${id}/assigned_users`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: WhatsAppBusinessAccountCreateAssignedUsersParams) =>
        client.post<WhatsAppBusinessAccountFields>(`${id}/assigned_users`, params as Record<string, unknown>),
      delete: (params: WhatsAppBusinessAccountDeleteAssignedUsersParams) =>
        client.delete(`${id}/assigned_users`, params as Record<string, unknown> ?? {}),
    },
    audiences: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/audiences`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createBusinessMessagingFeatureStatu: (params: WhatsAppBusinessAccountCreateBusinessMessagingFeatureStatusParams) =>
      client.post<WhatsAppBusinessAccountFields>(`${id}/business_messaging_feature_status`, params as Record<string, unknown>),
    callAnalytics: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: WhatsAppBusinessAccountListCallAnalyticsParams }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/call_analytics`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    conversationAnalytics: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: WhatsAppBusinessAccountListConversationAnalyticsParams }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/conversation_analytics`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    dataset: {
      __path: `${id}/dataset`,
      __brand: undefined as unknown as DatasetFields,
      list: <F extends (keyof DatasetFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<DatasetFields, F[number]>>(client, `${id}/dataset`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: WhatsAppBusinessAccountCreateDatasetParams) =>
        client.post<DatasetFields>(`${id}/dataset`, params as Record<string, unknown>),
    },
    degreesOfFreedomSpec: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/degrees_of_freedom_spec`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    flows: {
      __path: `${id}/flows`,
      __brand: undefined as unknown as Record<string, unknown>,
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/flows`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: WhatsAppBusinessAccountCreateFlowsParams) =>
        client.post<Record<string, unknown>>(`${id}/flows`, params as Record<string, unknown>),
    },
    createGeneratePaymentConfigurationOauthLink: (params: WhatsAppBusinessAccountCreateGeneratePaymentConfigurationOauthLinkParams) =>
      client.post<WhatsAppBusinessAccountFields>(`${id}/generate_payment_configuration_oauth_link`, params as Record<string, unknown>),
    groupAnalytics: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: WhatsAppBusinessAccountListGroupAnalyticsParams }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/group_analytics`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    messageCampaigns: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/message_campaigns`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createMessageSample: (params: WhatsAppBusinessAccountCreateMessageSamplesParams) =>
      client.post<WhatsAppBusinessAccountFields>(`${id}/message_samples`, params as Record<string, unknown>),
    messageTemplatePreviews: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: WhatsAppBusinessAccountListMessageTemplatePreviewsParams }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/message_template_previews`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    messageTemplates: {
      __path: `${id}/message_templates`,
      __brand: undefined as unknown as Record<string, unknown>,
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: WhatsAppBusinessAccountListMessageTemplatesParams }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/message_templates`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: WhatsAppBusinessAccountCreateMessageTemplatesParams) =>
        client.post<WhatsAppBusinessAccountFields>(`${id}/message_templates`, params as Record<string, unknown>),
      delete: (params: WhatsAppBusinessAccountDeleteMessageTemplatesParams) =>
        client.delete(`${id}/message_templates`, params as Record<string, unknown> ?? {}),
    },
    createMigrateFlow: (params: WhatsAppBusinessAccountCreateMigrateFlowsParams) =>
      client.post<WhatsAppBusinessAccountFields>(`${id}/migrate_flows`, params as Record<string, unknown>),
    createMigrateMessageTemplate: (params: WhatsAppBusinessAccountCreateMigrateMessageTemplatesParams) =>
      client.post<WhatsAppBusinessAccountFields>(`${id}/migrate_message_templates`, params as Record<string, unknown>),
    paymentConfiguration: {
      __path: `${id}/payment_configuration`,
      __brand: undefined as unknown as Record<string, unknown>,
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: WhatsAppBusinessAccountListPaymentConfigurationParams }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/payment_configuration`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: WhatsAppBusinessAccountCreatePaymentConfigurationParams) =>
        client.post<WhatsAppBusinessAccountFields>(`${id}/payment_configuration`, params as Record<string, unknown>),
      delete: (params: WhatsAppBusinessAccountDeletePaymentConfigurationParams) =>
        client.delete(`${id}/payment_configuration`, params as Record<string, unknown> ?? {}),
    },
    paymentConfigurations: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/payment_configurations`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    phoneNumbers: {
      __path: `${id}/phone_numbers`,
      __brand: undefined as unknown as Record<string, unknown>,
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/phone_numbers`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: WhatsAppBusinessAccountCreatePhoneNumbersParams) =>
        client.post<Record<string, unknown>>(`${id}/phone_numbers`, params as Record<string, unknown>),
    },
    pricingAnalytics: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: WhatsAppBusinessAccountListPricingAnalyticsParams }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/pricing_analytics`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    productCatalogs: {
      __path: `${id}/product_catalogs`,
      __brand: undefined as unknown as ProductCatalogFields,
      list: <F extends (keyof ProductCatalogFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<ProductCatalogFields, F[number]>>(client, `${id}/product_catalogs`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: WhatsAppBusinessAccountCreateProductCatalogsParams) =>
        client.post<ProductCatalogFields>(`${id}/product_catalogs`, params as Record<string, unknown>),
      delete: (params: WhatsAppBusinessAccountDeleteProductCatalogsParams) =>
        client.delete(`${id}/product_catalogs`, params as Record<string, unknown> ?? {}),
    },
    schedules: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/schedules`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createSetOboMobilityIntent: (params: WhatsAppBusinessAccountCreateSetOboMobilityIntentParams) =>
      client.post<Record<string, unknown>>(`${id}/set_obo_mobility_intent`, params as Record<string, unknown>),
    createSetSolutionMigrationIntent: (params: WhatsAppBusinessAccountCreateSetSolutionMigrationIntentParams) =>
      client.post<Record<string, unknown>>(`${id}/set_solution_migration_intent`, params as Record<string, unknown>),
    solutions: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/solutions`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    subscribedApps: {
      __path: `${id}/subscribed_apps`,
      __brand: undefined as unknown as Record<string, unknown>,
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/subscribed_apps`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: WhatsAppBusinessAccountCreateSubscribedAppsParams) =>
        client.post<WhatsAppBusinessAccountFields>(`${id}/subscribed_apps`, params as Record<string, unknown>),
      delete: (params?: Record<string, unknown>) =>
        client.delete(`${id}/subscribed_apps`, params as Record<string, unknown> ?? {}),
    },
    templateAnalytics: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: WhatsAppBusinessAccountListTemplateAnalyticsParams }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/template_analytics`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    templateGroupAnalytics: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: WhatsAppBusinessAccountListTemplateGroupAnalyticsParams }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/template_group_analytics`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    templateGroups: {
      __path: `${id}/template_groups`,
      __brand: undefined as unknown as Record<string, unknown>,
      list: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/template_groups`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: WhatsAppBusinessAccountCreateTemplateGroupsParams) =>
        client.post<Record<string, unknown>>(`${id}/template_groups`, params as Record<string, unknown>),
    },
    templatePerformanceMetrics: <F extends (keyof Record<string, unknown>)[]>(opts: { fields: F; params?: WhatsAppBusinessAccountListTemplatePerformanceMetricsParams }) =>
      new Cursor<Pick<Record<string, unknown>, F[number]>>(client, `${id}/template_performance_metrics`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
    createUpsertMessageTemplate: (params: WhatsAppBusinessAccountCreateUpsertMessageTemplatesParams) =>
      client.post<WhatsAppBusinessAccountFields>(`${id}/upsert_message_templates`, params as Record<string, unknown>),
    welcomeMessageSequences: {
      __path: `${id}/welcome_message_sequences`,
      __brand: undefined as unknown as CTXPartnerAppWelcomeMessageFlowFields,
      list: <F extends (keyof CTXPartnerAppWelcomeMessageFlowFields)[]>(opts: { fields: F; params?: WhatsAppBusinessAccountListWelcomeMessageSequencesParams }) =>
        new Cursor<Pick<CTXPartnerAppWelcomeMessageFlowFields, F[number]>>(client, `${id}/welcome_message_sequences`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
      create: (params: WhatsAppBusinessAccountCreateWelcomeMessageSequencesParams) =>
        client.post<Record<string, unknown>>(`${id}/welcome_message_sequences`, params as Record<string, unknown>),
      delete: (params: WhatsAppBusinessAccountDeleteWelcomeMessageSequencesParams) =>
        client.delete(`${id}/welcome_message_sequences`, params as Record<string, unknown> ?? {}),
    },
  };
}

