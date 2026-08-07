// Auto-generated types for authentication — do not edit

export interface AccessToken {
  client_id?: string;
  client_secret?: string;
  grant_type?: string;
  refresh_token?: string;
}


export interface CreateAccessTokenParams {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
}
