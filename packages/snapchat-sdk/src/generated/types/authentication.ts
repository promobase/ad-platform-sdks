// @generated
// fingerprint: sha256:8bd0e12bb29e214c6efa1b913c4cc64952dffcdb1eb038f3135af44e6e706cf6
// DO NOT EDIT: generated file; changes will be overwritten.
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
