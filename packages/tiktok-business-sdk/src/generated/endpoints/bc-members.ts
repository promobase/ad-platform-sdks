// Auto-generated client for BC Members — do not edit
import type { BcMemberGetParams, BcMemberGetResponse, BcMemberInviteParams, BcMemberInviteResponse, BcMemberUpdateParams, BcMemberUpdateResponse, BcMemberDeleteParams, BcMemberDeleteResponse } from "../types/bc-members.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createBcMembers(opts: { accessToken: string; advertiserId: string }) {
  async function get<T>(path: string, params: Record<string, unknown>): Promise<T> {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        searchParams.set(key, typeof value === "object" ? JSON.stringify(value) : String(value));
      }
    }
    const response = await fetch(`${TT_API_BASE}${path}?${searchParams.toString()}`, {
      headers: { "Access-Token": opts.accessToken },
    });
    const body = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || body.code !== 0) {
      throw new Error(`TikTok API error: ${body.message} (code ${body.code}, request_id ${body.request_id})`);
    }
    return body.data;
  }

  async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
    const response = await fetch(`${TT_API_BASE}${path}`, {
      method: "POST",
      headers: { "Access-Token": opts.accessToken, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const responseBody = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || responseBody.code !== 0) {
      throw new Error(`TikTok API error: ${responseBody.message} (code ${responseBody.code}, request_id ${responseBody.request_id})`);
    }
    return responseBody.data;
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
