// @generated
// fingerprint: sha256:60d0ee4c021f28210972a6dc4caccc8f9148ec913c17bc2f6a6068c629bebf05
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for BC Members — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { BcMemberGetParams, BcMemberGetResponse, BcMemberInviteParams, BcMemberInviteResponse, BcMemberUpdateParams, BcMemberUpdateResponse, BcMemberDeleteParams, BcMemberDeleteResponse } from "../types/bc-members.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createBcMembers(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

  async function get<T>(path: string, params: Record<string, unknown>): Promise<T> {
    return tiktokRequest<T>({
      accessToken: opts.accessToken,
      baseUrl: opts.baseUrl ?? TT_API_BASE,
      fetch: opts.fetch,
    }, {
      method: "GET",
      path,
      query: params,
    });
  }

  async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
    return tiktokRequest<T>({
      accessToken: opts.accessToken,
      baseUrl: opts.baseUrl ?? TT_API_BASE,
      fetch: opts.fetch,
    }, {
      method: "POST",
      path,
      body,
    });
  }

  return {
    /** Get the members of a BC */
    async getMember(params: BcMemberGetParams): Promise<BcMemberGetResponse> {
      return get<BcMemberGetResponse>("/open_api/v1.3/bc/member/get/", params as unknown as Record<string, unknown>);
    },

    /** Invite members to a BC */
    async memberInvite(params: BcMemberInviteParams): Promise<BcMemberInviteResponse> {
      return post<BcMemberInviteResponse>("/open_api/v1.3/bc/member/invite/", params as unknown as Record<string, unknown>);
    },

    /** Update info of a BC member */
    async updateMember(params: BcMemberUpdateParams): Promise<BcMemberUpdateResponse> {
      return post<BcMemberUpdateResponse>("/open_api/v1.3/bc/member/update/", params as unknown as Record<string, unknown>);
    },

    /** Delete a member from a BC or revoke a member invitation */
    async deleteMember(params: BcMemberDeleteParams): Promise<BcMemberDeleteResponse> {
      return post<BcMemberDeleteResponse>("/open_api/v1.3/bc/member/delete/", params as unknown as Record<string, unknown>);
    },
  };
}
