// Auto-generated types for Authentication — do not edit

export interface Oauth2AccessTokenParams {
  app_id: string;
  secret: string;
  auth_code: string;
  return_advertiser_ids?: boolean;
}


export interface Oauth2AccessTokenResponse {
  access_token?: string;
  advertiser_ids?: string[];
  scope?: number[];
}


export interface Oauth2RevokeTokenParams {
  app_id: string;
  secret: string;
  access_token: string;
}


export interface Oauth2RevokeTokenResponse {
  app_id?: string;
  advertiser_ids?: string[];
}


export interface TtUserOauth2TokenParams {
  client_id: string;
  client_secret: string;
  grant_type: string;
  auth_code: string;
  redirect_uri: string;
}


export interface TtUserOauth2TokenResponse {
  access_token?: string;
  token_type?: string;
  scope?: string;
  expires_in?: number;
  refresh_token?: string;
  refresh_token_expires_in?: number;
  open_id?: string;
}


export interface TtUserOauth2RefreshTokenParams {
  client_id: string;
  client_secret: string;
  grant_type: string;
  refresh_token: string;
}


export interface TtUserOauth2RefreshTokenResponse {}


export interface TtUserOauth2RevokeParams {
  client_id: string;
  client_secret: string;
  access_token: string;
}


export interface TtUserOauth2RevokeResponse {}
