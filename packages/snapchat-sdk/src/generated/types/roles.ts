// @generated
// fingerprint: sha256:e3f51d47b92e2768c5ce890471733b95e54c2aa5b9d75a43398e3b3b6672e369
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for roles — do not edit

export interface Role {
  id: string;
  updated_at: string;
  created_at: string;
  container_kind: string;
  container_id: string;
  member_id: string;
  ad_account_id: string;
  type: string;
}


export interface Rol {}


export interface ListRolesParams {
  memberId: string;
  limit?: string;
}


export interface ListRoles2Params {
  organizationId: string;
  limit?: string;
}


export interface CreateRolParams {
  organizationId: string;
  member_id: string;
  type: string;
}


export interface ListRoles3Params {
  adAccountId: string;
  limit?: string;
}


export interface CreateRol2Params {
  adAccountId: string;
  member_id: string;
  type: string;
}


export interface UpdateRolParams {
  adAccountId: string;
  member_id: string;
  catalog_id: string;
  type: string;
}


export interface CreateRol3Params {
  catalogId: string;
  member_id: string;
  type: string;
}


export interface ListRoles4Params {
  catalogId: string;
  limit?: string;
}


export interface DeleteRolParams {
  roleId: string;
}
