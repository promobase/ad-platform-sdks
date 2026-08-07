// Auto-generated client for user_account — do not edit
import type { PinterestApiClient } from "../../api-client.ts";
import type { UserAccountGetResponse, UserAccountAnalyticsResponse, UserAccountAnalyticsTopPinsResponse, UserAccountAnalyticsTopVideoPinsResponse, LinkedBusinessAccountsGetResponse, FollowersListResponse, UserFollowingGetResponse, FollowUserUpdateResponse, BoardsUserFollowsListResponse, UserWebsitesGetResponse, VerifyWebsiteUpdateResponse, UnverifyWebsiteDeleteResponse, WebsiteVerificationGetResponse, UserAccountFollowedInterestsResponse } from "../types.ts";
import type { GetUserAccountParams, GetUserAccountAnalyticsParams, GetUserAccountAnalyticsTopPinsParams, GetUserAccountAnalyticsTopVideoPinsParams, ListLinkedBusinessAccountsParams, ListFollowersParams, ListUserFollowingParams, UpdateFollowUserParams, ListBoardsUserFollowsParams, ListUserWebsitesParams, UpdateVerifyWebsiteParams, DeleteUnverifyWebsiteParams, GetWebsiteVerificationParams, ListUserAccountFollowedInterestsParams } from "../params.ts";

/** user_account — 14 endpoints */
export function createUserAccountClient(api: PinterestApiClient) {
  return {
    /** Get user account
   * Requires pinterest_oauth2: user_accounts:read; client_credentials: user_accounts:read. */
    async getUserAccount(params: GetUserAccountParams): Promise<UserAccountGetResponse> {
      const query = params;
      const envelope = await api.get<UserAccountGetResponse>(`/user_account`, query);
      return envelope;
    },

    /** Get user account analytics
   * Requires pinterest_oauth2: user_accounts:read. */
    async getUserAccountAnalytics(params: GetUserAccountAnalyticsParams): Promise<UserAccountAnalyticsResponse> {
      const query = params;
      const envelope = await api.get<UserAccountAnalyticsResponse>(`/user_account/analytics`, query);
      return envelope;
    },

    /** Get user account top pins analytics
   * Requires pinterest_oauth2: pins:read, user_accounts:read; client_credentials: pins:read, user_accounts:read. */
    async getUserAccountAnalyticsTopPins(params: GetUserAccountAnalyticsTopPinsParams): Promise<UserAccountAnalyticsTopPinsResponse> {
      const query = params;
      const envelope = await api.get<UserAccountAnalyticsTopPinsResponse>(`/user_account/analytics/top_pins`, query);
      return envelope;
    },

    /** Get user account top video pins analytics
   * Requires pinterest_oauth2: pins:read, user_accounts:read; client_credentials: pins:read, user_accounts:read. */
    async getUserAccountAnalyticsTopVideoPins(params: GetUserAccountAnalyticsTopVideoPinsParams): Promise<UserAccountAnalyticsTopVideoPinsResponse> {
      const query = params;
      const envelope = await api.get<UserAccountAnalyticsTopVideoPinsResponse>(`/user_account/analytics/top_video_pins`, query);
      return envelope;
    },

    /** List linked businesses
   * Requires pinterest_oauth2: user_accounts:read; client_credentials: user_accounts:read. */
    async listLinkedBusinessAccounts(params: ListLinkedBusinessAccountsParams): Promise<LinkedBusinessAccountsGetResponse> {
      const query = params;
      const envelope = await api.get<LinkedBusinessAccountsGetResponse>(`/user_account/businesses`, query);
      return envelope;
    },

    /** List followers
   * Requires pinterest_oauth2: user_accounts:read; client_credentials: user_accounts:read. */
    async listFollowers(params: ListFollowersParams): Promise<FollowersListResponse> {
      const query = params;
      const envelope = await api.get<FollowersListResponse>(`/user_account/followers`, query);
      return envelope;
    },

    /** List following
   * Requires pinterest_oauth2: user_accounts:read; client_credentials: user_accounts:read. */
    async listUserFollowing(params: ListUserFollowingParams): Promise<UserFollowingGetResponse> {
      const query = params;
      const envelope = await api.get<UserFollowingGetResponse>(`/user_account/following`, query);
      return envelope;
    },

    /** Follow user
   * Requires pinterest_oauth2: user_accounts:write. */
    async updateFollowUser(params: UpdateFollowUserParams): Promise<FollowUserUpdateResponse> {
      const { username, ...rest } = params;
      const envelope = await api.post<FollowUserUpdateResponse>(`/user_account/following/${username}`, rest);
      return envelope;
    },

    /** List following boards
   * Requires pinterest_oauth2: user_accounts:read; client_credentials: user_accounts:read. */
    async listBoardsUserFollows(params: ListBoardsUserFollowsParams): Promise<BoardsUserFollowsListResponse> {
      const query = params;
      const envelope = await api.get<BoardsUserFollowsListResponse>(`/user_account/following/boards`, query);
      return envelope;
    },

    /** Get user websites
   * Requires pinterest_oauth2: user_accounts:read. */
    async listUserWebsites(params: ListUserWebsitesParams): Promise<UserWebsitesGetResponse> {
      const query = params;
      const envelope = await api.get<UserWebsitesGetResponse>(`/user_account/websites`, query);
      return envelope;
    },

    /** Verify website
   * Requires pinterest_oauth2: user_accounts:write. */
    async updateVerifyWebsite(params: UpdateVerifyWebsiteParams): Promise<VerifyWebsiteUpdateResponse> {
      const rest = params;
      const envelope = await api.post<VerifyWebsiteUpdateResponse>(`/user_account/websites`, rest);
      return envelope;
    },

    /** Unverify website
   * Requires pinterest_oauth2: user_accounts:write. */
    async deleteUnverifyWebsite(params: DeleteUnverifyWebsiteParams): Promise<UnverifyWebsiteDeleteResponse> {
      
      const envelope = await api.delete<UnverifyWebsiteDeleteResponse>(`/user_account/websites`);
      return envelope;
    },

    /** Get user verification code for website claiming
   * Requires pinterest_oauth2: user_accounts:read; client_credentials: user_accounts:read. */
    async getWebsiteVerification(params: GetWebsiteVerificationParams): Promise<WebsiteVerificationGetResponse> {
      const query = params;
      const envelope = await api.get<WebsiteVerificationGetResponse>(`/user_account/websites/verification`, query);
      return envelope;
    },

    /** List following interests
   * Requires pinterest_oauth2: user_accounts:read; client_credentials: user_accounts:read. */
    async listUserAccountFollowedInterests(params: ListUserAccountFollowedInterestsParams): Promise<UserAccountFollowedInterestsResponse> {
      const { username, ...query } = params;
      const envelope = await api.get<UserAccountFollowedInterestsResponse>(`/users/${username}/interests/follow`, query);
      return envelope;
    },
  };
}
