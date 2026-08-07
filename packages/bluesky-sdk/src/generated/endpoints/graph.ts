// Auto-generated client for app.bsky.graph — do not edit
import type { BlueskyApiClient } from "../../api-client.ts";
import type { AppBskyGraphDefsStarterPackViewBasic, AppBskyActorDefsProfileView, AppBskyGraphDefsListView, AppBskyGraphDefsListItemView, AppBskyGraphGetListsWithMembershipListWithMembership, AppBskyGraphDefsRelationship, AppBskyGraphDefsNotFoundActor, AppBskyGraphDefsStarterPackView, AppBskyGraphGetStarterPacksWithMembershipStarterPackWithMembership, GetActorStarterPacksResponse, GetBlocksResponse, GetFollowersResponse, GetFollowsResponse, GetKnownFollowersResponse, GetListResponse, GetListBlocksResponse, GetListMutesResponse, GetListsResponse, GetListsWithMembershipResponse, GetMutesResponse, GetRelationshipsResponse, GetStarterPackResponse, GetStarterPacksResponse, GetStarterPacksWithMembershipResponse, GetSuggestedFollowsByActorResponse, SearchStarterPacksResponse, SearchStarterPacksV2Response } from "../types.ts";
import type { GetActorStarterPacksParams, GetBlocksParams, GetFollowersParams, GetFollowsParams, GetKnownFollowersParams, GetListParams, GetListBlocksParams, GetListMutesParams, GetListsParams, GetListsWithMembershipParams, GetMutesParams, GetRelationshipsParams, GetStarterPackParams, GetStarterPacksParams, GetStarterPacksWithMembershipParams, GetSuggestedFollowsByActorParams, MuteActorParams, MuteActorListParams, MuteThreadParams, SearchStarterPacksParams, SearchStarterPacksV2Params, UnmuteActorParams, UnmuteActorListParams, UnmuteThreadParams } from "../params.ts";

/** app.bsky.graph — 24 endpoints */
export function createGraphClient(api: BlueskyApiClient) {
  return {
    /** Get a list of starter packs created by the actor. */
    async getActorStarterPacks(params: GetActorStarterPacksParams): Promise<GetActorStarterPacksResponse> {
      const envelope = await api.get<GetActorStarterPacksResponse>("/xrpc/app.bsky.graph.getActorStarterPacks", params);
      return envelope;
    },

    /** Enumerates which accounts the requesting account is currently blocking. Requires auth. */
    async getBlocks(params: GetBlocksParams): Promise<GetBlocksResponse> {
      const envelope = await api.get<GetBlocksResponse>("/xrpc/app.bsky.graph.getBlocks", params);
      return envelope;
    },

    /** Enumerates accounts which follow a specified account (actor). */
    async getFollowers(params: GetFollowersParams): Promise<GetFollowersResponse> {
      const envelope = await api.get<GetFollowersResponse>("/xrpc/app.bsky.graph.getFollowers", params);
      return envelope;
    },

    /** Enumerates accounts which a specified account (actor) follows. */
    async getFollows(params: GetFollowsParams): Promise<GetFollowsResponse> {
      const envelope = await api.get<GetFollowsResponse>("/xrpc/app.bsky.graph.getFollows", params);
      return envelope;
    },

    /** Enumerates accounts which follow a specified account (actor) and are followed by the viewer. */
    async getKnownFollowers(params: GetKnownFollowersParams): Promise<GetKnownFollowersResponse> {
      const envelope = await api.get<GetKnownFollowersResponse>("/xrpc/app.bsky.graph.getKnownFollowers", params);
      return envelope;
    },

    /** Gets a 'view' (with additional context) of a specified list. */
    async getList(params: GetListParams): Promise<GetListResponse> {
      const envelope = await api.get<GetListResponse>("/xrpc/app.bsky.graph.getList", params);
      return envelope;
    },

    /** Get mod lists that the requesting account (actor) is blocking. Requires auth. */
    async getListBlocks(params: GetListBlocksParams): Promise<GetListBlocksResponse> {
      const envelope = await api.get<GetListBlocksResponse>("/xrpc/app.bsky.graph.getListBlocks", params);
      return envelope;
    },

    /** Enumerates mod lists that the requesting account (actor) currently has muted. Requires auth. */
    async getListMutes(params: GetListMutesParams): Promise<GetListMutesResponse> {
      const envelope = await api.get<GetListMutesResponse>("/xrpc/app.bsky.graph.getListMutes", params);
      return envelope;
    },

    /** Enumerates the lists created by a specified account (actor). */
    async getLists(params: GetListsParams): Promise<GetListsResponse> {
      const envelope = await api.get<GetListsResponse>("/xrpc/app.bsky.graph.getLists", params);
      return envelope;
    },

    /** Enumerates the lists created by the session user, and includes membership information about 'actor' in those lists. Only supports curation and moderation lists (no reference lists, used in starter packs). Requires auth. */
    async getListsWithMembership(params: GetListsWithMembershipParams): Promise<GetListsWithMembershipResponse> {
      const envelope = await api.get<GetListsWithMembershipResponse>("/xrpc/app.bsky.graph.getListsWithMembership", params);
      return envelope;
    },

    /** Enumerates accounts that the requesting account (actor) currently has fully muted. Mutes scoped to specific kinds of content (only reposts, only quote posts) are not included. Responses may contain more items than the requested limit. Requires auth. */
    async getMutes(params: GetMutesParams): Promise<GetMutesResponse> {
      const envelope = await api.get<GetMutesResponse>("/xrpc/app.bsky.graph.getMutes", params);
      return envelope;
    },

    /** Enumerates public relationships between one account, and a list of other accounts. Does not require auth. */
    async getRelationships(params: GetRelationshipsParams): Promise<GetRelationshipsResponse> {
      const envelope = await api.get<GetRelationshipsResponse>("/xrpc/app.bsky.graph.getRelationships", params);
      return envelope;
    },

    /** Gets a view of a starter pack. */
    async getStarterPack(params: GetStarterPackParams): Promise<GetStarterPackResponse> {
      const envelope = await api.get<GetStarterPackResponse>("/xrpc/app.bsky.graph.getStarterPack", params);
      return envelope;
    },

    /** Get views for a list of starter packs. */
    async getStarterPacks(params: GetStarterPacksParams): Promise<GetStarterPacksResponse> {
      const envelope = await api.get<GetStarterPacksResponse>("/xrpc/app.bsky.graph.getStarterPacks", params);
      return envelope;
    },

    /** Enumerates the starter packs created by the session user, and includes membership information about 'actor' in those starter packs. Requires auth. */
    async getStarterPacksWithMembership(params: GetStarterPacksWithMembershipParams): Promise<GetStarterPacksWithMembershipResponse> {
      const envelope = await api.get<GetStarterPacksWithMembershipResponse>("/xrpc/app.bsky.graph.getStarterPacksWithMembership", params);
      return envelope;
    },

    /** Enumerates follows similar to a given account (actor). Expected use is to recommend additional accounts immediately after following one account. */
    async getSuggestedFollowsByActor(params: GetSuggestedFollowsByActorParams): Promise<GetSuggestedFollowsByActorResponse> {
      const envelope = await api.get<GetSuggestedFollowsByActorResponse>("/xrpc/app.bsky.graph.getSuggestedFollowsByActor", params);
      return envelope;
    },

    /** Creates a mute relationship for the specified account. If a mute already exists for the account, it is updated in place: the stored scope is replaced with the scope in this request. Mutes are private in Bluesky. Requires auth. */
    async muteActor(params: MuteActorParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/app.bsky.graph.muteActor", params, undefined);
      return envelope;
    },

    /** Creates a mute relationship for the specified list of accounts. Mutes are private in Bluesky. Requires auth. */
    async muteActorList(params: MuteActorListParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/app.bsky.graph.muteActorList", params, undefined);
      return envelope;
    },

    /** Mutes a thread preventing notifications from the thread and any of its children. Mutes are private in Bluesky. Requires auth. */
    async muteThread(params: MuteThreadParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/app.bsky.graph.muteThread", params, undefined);
      return envelope;
    },

    /** Find starter packs matching search criteria. Does not require auth. */
    async searchStarterPacks(params: SearchStarterPacksParams): Promise<SearchStarterPacksResponse> {
      const envelope = await api.get<SearchStarterPacksResponse>("/xrpc/app.bsky.graph.searchStarterPacks", params);
      return envelope;
    },

    /** Find starter packs matching search criteria. Does not require auth. */
    async searchStarterPacksV2(params: SearchStarterPacksV2Params): Promise<SearchStarterPacksV2Response> {
      const envelope = await api.get<SearchStarterPacksV2Response>("/xrpc/app.bsky.graph.searchStarterPacksV2", params);
      return envelope;
    },

    /** Unmutes the specified account. Requires auth. */
    async unmuteActor(params: UnmuteActorParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/app.bsky.graph.unmuteActor", params, undefined);
      return envelope;
    },

    /** Unmutes the specified list of accounts. Requires auth. */
    async unmuteActorList(params: UnmuteActorListParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/app.bsky.graph.unmuteActorList", params, undefined);
      return envelope;
    },

    /** Unmutes the specified thread. Requires auth. */
    async unmuteThread(params: UnmuteThreadParams): Promise<unknown> {
      const envelope = await api.post<unknown>("/xrpc/app.bsky.graph.unmuteThread", params, undefined);
      return envelope;
    },
  };
}
