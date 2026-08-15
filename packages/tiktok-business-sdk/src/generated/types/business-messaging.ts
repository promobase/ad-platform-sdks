// @generated
// fingerprint: sha256:acc2185c938b6a64fa57c10a1ff80713fefa5f70e332edfe3e01892726ae8356
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for Business Messaging — do not edit

export interface BusinessMessageSendParams {
  business_id: string;
  recipient_type?: string;
  recipient?: string;
  message_type: "TEXT" | "IMAGE" | "SHARE_POST" | "TEMPLATE" | "SENDER_ACTION";
  text?: {
  body?: string;
};
  image?: {
  media_id?: string;
};
  share_post?: {
  item_id?: string;
};
  template?: {
  type?: "QA_BUTTON_CARD" | "QA_LINK_CARD";
  title?: string;
  buttons?: {
  type?: string;
  title?: string;
  id?: string;
}[];
};
  sender_action?: string;
  referenced_message_info?: {
  referenced_message_id?: string;
};
  direct_reply?: {
  reply_type?: string;
  comment_reply?: {
  comment_id?: string;
};
};
}


export interface BusinessMessageSendResponse {
  message?: {
  message_id?: string;
};
}


export interface BusinessMessageConversationListParams {
  business_id: string;
  conversation_type: string;
  limit?: number;
  cursor?: number;
}


export interface BusinessMessageConversationListResponse {
  conversations?: {
  conversation_id?: string;
  update_time?: number;
  referral?: {
  ad?: {
  advertiser_id?: string;
  ad_id?: string;
  timestamp?: number;
  ad_name?: string;
  embed_url?: string;
  message_material_id?: string;
}[];
  short_link?: {
  ref?: string;
  prefilled_message?: string;
  prefilled_message_audit_status?: "REJECT" | "PASS";
}[];
};
}[];
  has_more?: boolean;
  cursor?: number;
}


export interface BusinessMessageContentListParams {
  business_id: string;
  conversation_id: string;
}


export interface BusinessMessageContentListResponse {
  messages?: {
  sender?: string;
  recipient?: string;
  conversation_id?: string;
  message_id?: string;
  timestamp?: number;
  message_tag?: {
  source?: "APP" | "WEB" | "API" | "OTHERS" | "UNKNOWN_SOURCE";
};
  message_type?: "TEXT" | "IMAGE" | "SHARE_POST" | "VIDEO" | "EMOJI" | "STICKER" | "TEMPLATE" | "OTHER";
  auto_message_type?: "WELCOME_MESSAGE" | "SUGGESTED_QUESTION" | "AUTO_REPLY";
  text?: {
  body?: string;
};
  image?: {
  media_id?: string;
};
  share_post?: {
  embed_url?: string;
};
  reactions?: {
  type?: "EMOJI" | "AI_EMOJI";
  emoji?: string;
  ai_emoji_url?: string;
  unique_identifier?: string;
  timestamp?: number;
}[];
  sticker?: {
  url?: string;
};
  emoji?: {
  url?: string;
};
  video?: {
  media_id?: string;
};
  template?: {
  type?: "QA_BUTTON_CARD" | "QA_LINK_CARD";
  title?: string;
  buttons?: {
  type?: string;
  title?: string;
  id?: string;
}[];
};
  from_user?: {
  role?: "BUSINESS_ACCOUNT" | "PERSONAL_ACCOUNT";
  id?: string;
};
  to_user?: {
  role?: "BUSINESS_ACCOUNT" | "PERSONAL_ACCOUNT";
  id?: string;
};
  referenced_message_info?: {
  referenced_message_id?: string;
};
}[];
  participants?: {
  role?: "BUSINESS_ACCOUNT" | "PERSONAL_ACCOUNT";
  id?: string;
  display_name?: string;
  profile_image?: string;
  is_follower?: boolean;
}[];
}


export interface BusinessMessageMediaUploadParams {
  business_id: string;
  file: File | Blob;
  media_type: string;
}


export interface BusinessMessageMediaUploadResponse {
  media_id?: string;
}


export interface BusinessMessageMediaDownloadParams {
  business_id: string;
  conversation_id: string;
  message_id: string;
  media_id: string;
  media_type: "IMAGE" | "VIDEO";
}


export interface BusinessMessageMediaDownloadResponse {
  download_url?: string;
}


export interface BusinessMessageCapabilitiesGetParams {
  business_id: string;
  capability_types: string[];
  conversation_id?: string;
  conversation_type?: string;
}


export interface BusinessMessageCapabilitiesGetResponse {
  capability_infos?: {
  capability_type?: string;
  capability_result?: boolean;
}[];
}


export interface BusinessMessageDirectReplyUpdateParams {
  business_id: string;
  direct_reply_type: string;
  operation_status: "ENABLE" | "DISABLE";
}


export interface BusinessMessageDirectReplyUpdateResponse {}


export interface BusinessMessageDirectReplyGetParams {
  business_id: string;
  direct_reply_type: string;
}


export interface BusinessMessageDirectReplyGetResponse {
  business_id?: string;
  direct_reply_type?: string;
  operation_status?: "ENABLE" | "DISABLE";
}


export interface BusinessWebhookUpdateParams {
  app_id: string;
  secret: string;
  event_type: string;
  callback_url: string;
}


export interface BusinessWebhookUpdateResponse {
  app_id?: string;
  event_type?: string;
  callback_url?: string;
}


export interface BusinessWebhookListParams {
  app_id: string;
  secret: string;
  event_type: string;
}


export interface BusinessWebhookListResponse {
  app_id?: string;
  event_type?: string;
  callback_url?: string;
}


export interface BusinessWebhookDeleteParams {
  app_id: string;
  secret: string;
  event_type: string;
}


export interface BusinessWebhookDeleteResponse {
  app_id?: string;
  event_type?: string;
}


export interface BusinessMessageAutoMessageCreateParams {
  business_id: string;
  auto_message_type: "WELCOME_MESSAGE" | "SUGGESTED_QUESTION" | "CHAT_PROMPT";
  welcome_message?: {
  content?: string;
};
  suggested_question?: {
  question?: string;
  answer?: string;
};
  chat_prompt?: {
  title?: string;
  content?: string;
};
}


export interface BusinessMessageAutoMessageCreateResponse {
  auto_message?: {
  auto_message_id?: string;
};
}


export interface BusinessMessageAutoMessageUpdateParams {
  business_id: string;
  auto_message_id: string;
  auto_message_type: "WELCOME_MESSAGE" | "SUGGESTED_QUESTION" | "CHAT_PROMPT" | "REVIEWING";
  welcome_message?: {
  content?: string;
};
  suggested_question?: {
  question?: string;
  answer?: string;
};
  chat_prompt?: {
  title?: string;
  content?: string;
};
}


export interface BusinessMessageAutoMessageUpdateResponse {
  auto_message?: {
  auto_message_id?: string;
};
}


export interface BusinessMessageAutoMessageStatusUpdateParams {
  business_id: string;
  auto_message_type: "WELCOME_MESSAGE" | "SUGGESTED_QUESTION" | "CHAT_PROMPT";
  operation_status: "ENABLE" | "DISABLE";
}


export interface BusinessMessageAutoMessageStatusUpdateResponse {}


export interface BusinessMessageAutoMessageGetParams {
  business_id: string;
  auto_message_type: "WELCOME_MESSAGE" | "SUGGESTED_QUESTION" | "CHAT_PROMPT";
  auto_message_id?: string;
}


export interface BusinessMessageAutoMessageGetResponse {
  business_id?: string;
  operation_status?: "ENABLE" | "DISABLE";
  auto_messages?: {
  auto_message_id?: string;
  auto_message_type?: "WELCOME_MESSAGE" | "SUGGESTED_QUESTION" | "CHAT_PROMPT";
  audit_status?: "REVIEWING" | "APPROVED" | "REJECTED";
  welcome_message?: {
  content?: string;
};
  suggested_question?: {
  question?: string;
  answer?: string;
};
  chat_prompt?: {
  title?: string;
  content?: string;
};
}[];
}


export interface BusinessMessageAutoMessageDeleteParams {
  business_id: string;
  auto_message_type: "SUGGESTED_QUESTION" | "CHAT_PROMPT";
  auto_message_id: string;
}


export interface BusinessMessageAutoMessageDeleteResponse {}


export interface BusinessMessageAutoMessageSortParams {
  business_id: string;
  auto_message_type: string;
  auto_message_ids: string[];
}


export interface BusinessMessageAutoMessageSortResponse {}
