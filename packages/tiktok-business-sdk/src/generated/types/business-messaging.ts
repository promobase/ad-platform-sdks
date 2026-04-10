// Auto-generated types for Business Messaging — do not edit

export interface BusinessMessageSendParams {}


export interface BusinessMessageSendResponse {}


export interface BusinessMessageConversationListParams {}


export interface BusinessMessageConversationListResponse {}


export interface BusinessMessageContentListParams {}


export interface BusinessMessageContentListResponse {}


export interface BusinessMessageMediaUploadParams {}


export interface BusinessMessageMediaUploadResponse {}


export interface BusinessMessageMediaDownloadParams {}


export interface BusinessMessageMediaDownloadResponse {}


export interface BusinessMessageCapabilitiesGetParams {}


export interface BusinessMessageCapabilitiesGetResponse {}


export interface BusinessMessageDirectReplyUpdateParams {
  business_id: string;
  direct_reply_type: string;
  operation_status: string;
}


export interface BusinessMessageDirectReplyUpdateResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: Record<string, unknown>;
}


export interface BusinessMessageDirectReplyGetParams {
  business_id: string;
  direct_reply_type: string;
}


export interface BusinessMessageDirectReplyGetResponse {
  code?: number;
  message?: string;
  request_id?: string;
  data?: {
  business_id?: string;
  direct_reply_type?: string;
  operation_status?: string;
};
}


export interface BusinessWebhookUpdateParams {}


export interface BusinessWebhookUpdateResponse {}


export interface BusinessWebhookListParams {}


export interface BusinessWebhookListResponse {}


export interface BusinessWebhookDeleteParams {}


export interface BusinessWebhookDeleteResponse {}


export interface BusinessMessageAutoMessageCreateParams {}


export interface BusinessMessageAutoMessageCreateResponse {}


export interface BusinessMessageAutoMessageUpdateParams {}


export interface BusinessMessageAutoMessageUpdateResponse {}


export interface BusinessMessageAutoMessageStatusUpdateParams {}


export interface BusinessMessageAutoMessageStatusUpdateResponse {}


export interface BusinessMessageAutoMessageGetParams {}


export interface BusinessMessageAutoMessageGetResponse {}


export interface BusinessMessageAutoMessageDeleteParams {}


export interface BusinessMessageAutoMessageDeleteResponse {}


export interface BusinessMessageAutoMessageSortParams {}


export interface BusinessMessageAutoMessageSortResponse {}

