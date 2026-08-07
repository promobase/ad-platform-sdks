// Auto-generated types for members — do not edit

export interface Member {
  id: string;
  updated_at: string;
  created_at: string;
  email: string;
  organization_id: string;
  display_name: string;
  member_status: string;
}


export interface V1 {}


export interface ListMembersParams {
  organizationId: string;
}


export interface GetMemberParams {
  memberId: string;
}


export interface CreateMemberParams {
  organizationId: string;
  email: string;
  display_name: string;
}


export interface DeleteMemberIdParams {
  memberId: string;
}
