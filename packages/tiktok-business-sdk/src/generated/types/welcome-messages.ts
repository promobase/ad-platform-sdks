// Auto-generated types for Welcome Messages — do not edit

export interface CreativeAutoMessageCreateParams {
  advertiser_id: string;
  auto_message_type: string;
  welcome_message?: {
  title?: string;
  content?: string;
  suggested_questions?: {
  question?: string;
  answer?: string;
}[];
};
}


export interface CreativeAutoMessageCreateResponse {}


export interface CreativeAutoMessageGetParams {
  advertiser_id: string;
  auto_message_type: string;
  auto_message_id?: string;
  page?: number;
  page_size?: number;
}


export interface CreativeAutoMessageGetResponse {
  list?: {
  auto_message_id?: string;
  auto_message_type?: string;
  welcome_message?: string;
  title?: string;
  content?: string;
  suggested_questions?: {
  question?: string;
  answer?: string;
}[];
  audit_status?: "AUDITING" | "PASS" | "REJECTED";
  create_time?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}
