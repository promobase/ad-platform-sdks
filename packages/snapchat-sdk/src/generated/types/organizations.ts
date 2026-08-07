// Auto-generated types for organizations — do not edit

export interface Organization {
  id: string;
  updated_at: string;
  created_at: string;
  name: string;
  country: string;
  postal_code: string;
  locality: string;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  tax_type: string;
  address_line_1: string;
  administrative_district_level_1: string;
  accepted_term_version: string;
  is_agency: boolean;
  configuration_settings: {
  notifications_enabled: boolean;
};
  type: string;
  state: string;
  roles: unknown[];
  ad_accounts: {
  id: string;
  updated_at: string;
  created_at: string;
  name: string;
  type: string;
  status: string;
  currency: string;
  timezone: string;
  roles: unknown[];
}[];
  my_display_name: string;
  my_invited_email: string;
  my_member_id: string;
}


export interface ListOrganizationsParams {
  with_ad_accounts?: boolean;
}


export interface GetOrganizationParams {
  id: string;
}
