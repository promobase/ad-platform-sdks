// Auto-generated types for BC Management — do not edit

export interface BcGetParams {
  bc_id?: string;
  page?: number;
  page_size?: number;
}


export interface BcGetResponse {
  list?: {
  bc_info?: {
  bc_id?: string;
  verification_status?: "NOT_SUBMITTED" | "REVIEWING" | "VERIFIED" | "FAILED" | "EXPIRED";
  name?: string;
  company?: string;
  currency?: string;
  registered_area?: string;
  status?: string;
  timezone?: string;
  type?: "NORMAL" | "DIRECT" | "AGENCY" | "SELF_SERVICE" | "SELF_SERVICE_AGENCY";
};
  user_role?: "ADMIN" | "STANDARD";
  ext_user_role?: {
  finance_role?: "MANAGER" | "ANALYST";
};
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface ChangelogGetParams {
  bc_id: string;
  filtering?: {
  start_date?: string;
  end_date?: string;
  activity_type?: "ALL" | "USER" | "ACCOUNT" | "ASSET" | "BUSINESS";
};
  lang?: string;
  sort_field?: string;
  sort_type?: string;
  page?: number;
  page_size?: number;
}


export interface ChangelogGetResponse {
  changelog_list?: {
  time?: string;
  activity_type?: "USER" | "ACCOUNT" | "ASSET" | "BUSINESS";
  operator_id?: string;
  activity_log?: string;
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}
