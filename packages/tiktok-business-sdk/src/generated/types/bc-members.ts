// Auto-generated types for BC Members — do not edit

export interface BcMemberGetParams {
  bc_id: string;
  page?: number;
  page_size?: number;
  filtering?: {
  keyword?: string;
  user_role?: "ADMIN" | "STANDARD";
  relation_status?: "BOUND" | "PENDING" | "REJECTED";
};
}


export interface BcMemberGetResponse {
  list?: {
  user_id?: string;
  user_name?: string;
  user_role?: string;
  relation_status?: string;
  user_email?: string;
  ext_user_role?: {
  finance_role?: "MANAGER" | "ANALYST";
};
}[];
  page_info?: {
  total_number?: number;
  total_page?: number;
  page_size?: number;
  page?: number;
};
}


export interface BcMemberInviteParams {
  bc_id: string;
  emails: string[];
  user_role: "ADMIN" | "STANDARD";
  asset_ids?: string[];
  advertiser_role?: "ADMIN" | "OPERATOR" | "ANALYST";
  ext_user_role?: {
  finance_role?: "MANAGER" | "ANALYST";
};
}


export interface BcMemberInviteResponse {}


export interface BcMemberUpdateParams {
  bc_id: string;
  user_id: string;
  user_role?: "ADMIN" | "STANDARD";
  user_name?: string;
  ext_user_role?: {
  finance_role?: "ANALYST" | "MANAGER";
};
}


export interface BcMemberUpdateResponse {}


export interface BcMemberDeleteParams {
  bc_id: string;
  user_id?: string;
  user_email?: string;
}


export interface BcMemberDeleteResponse {}
