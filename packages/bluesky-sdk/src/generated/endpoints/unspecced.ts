// Auto-generated client for app.bsky.unspecced — do not edit
import type { BlueskyApiClient } from "../../api-client.ts";
import type { AppBskyUnspeccedDefsAgeAssuranceState, AppBskyUnspeccedGetConfigLiveNowConfig, AppBskyGraphDefsStarterPackView, AppBskyFeedDefsGeneratorView, AppBskyUnspeccedGetPostThreadOtherV2ThreadItem, AppBskyUnspeccedGetPostThreadV2ThreadItem, AppBskyFeedDefsThreadgateView, AppBskyActorDefsProfileView, AppBskyUnspeccedDefsSkeletonSearchActor, AppBskyUnspeccedGetTaggedSuggestionsSuggestion, AppBskyUnspeccedDefsTrendingTopic, AppBskyUnspeccedDefsTrendView, AppBskyUnspeccedDefsSkeletonTrend, AppBskyUnspeccedDefsSkeletonSearchPost, AppBskyUnspeccedDefsSkeletonSearchStarterPack, GetAgeAssuranceStateResponse, GetConfig2Response, GetOnboardingSuggestedStarterPacksResponse, GetOnboardingSuggestedStarterPacksSkeletonResponse, GetOnboardingSuggestedUsersSkeletonResponse, GetPopularFeedGeneratorsResponse, GetPostThreadOtherV2Response, GetPostThreadV2Response, GetSuggestedFeeds2Response, GetSuggestedFeedsSkeletonResponse, GetSuggestedOnboardingUsersResponse, GetSuggestedStarterPacksResponse, GetSuggestedStarterPacksSkeletonResponse, GetSuggestedUsersResponse, GetSuggestedUsersForDiscoverResponse, GetSuggestedUsersForDiscoverSkeletonResponse, GetSuggestedUsersForExploreResponse, GetSuggestedUsersForExploreSkeletonResponse, GetSuggestedUsersForSeeMoreResponse, GetSuggestedUsersForSeeMoreSkeletonResponse, GetSuggestedUsersSkeletonResponse, GetSuggestionsSkeletonResponse, GetTaggedSuggestionsResponse, GetTrendingTopicsResponse, GetTrendsResponse, GetTrendsSkeletonResponse, InitAgeAssuranceResponse, SearchActorsSkeletonResponse, SearchPostsSkeletonResponse, SearchStarterPacksSkeletonResponse } from "../types.ts";
import type { GetAgeAssuranceStateParams, GetConfig2Params, GetOnboardingSuggestedStarterPacksParams, GetOnboardingSuggestedStarterPacksSkeletonParams, GetOnboardingSuggestedUsersSkeletonParams, GetPopularFeedGeneratorsParams, GetPostThreadOtherV2Params, GetPostThreadV2Params, GetSuggestedFeeds2Params, GetSuggestedFeedsSkeletonParams, GetSuggestedOnboardingUsersParams, GetSuggestedStarterPacksParams, GetSuggestedStarterPacksSkeletonParams, GetSuggestedUsersParams, GetSuggestedUsersForDiscoverParams, GetSuggestedUsersForDiscoverSkeletonParams, GetSuggestedUsersForExploreParams, GetSuggestedUsersForExploreSkeletonParams, GetSuggestedUsersForSeeMoreParams, GetSuggestedUsersForSeeMoreSkeletonParams, GetSuggestedUsersSkeletonParams, GetSuggestionsSkeletonParams, GetTaggedSuggestionsParams, GetTrendingTopicsParams, GetTrendsParams, GetTrendsSkeletonParams, InitAgeAssuranceParams, SearchActorsSkeletonParams, SearchPostsSkeletonParams, SearchStarterPacksSkeletonParams } from "../params.ts";

/** app.bsky.unspecced — 30 endpoints */
export function createUnspeccedClient(api: BlueskyApiClient) {
  return {
    /** Returns the current state of the age assurance process for an account. This is used to check if the user has completed age assurance or if further action is required. */
    async getAgeAssuranceState(params: GetAgeAssuranceStateParams): Promise<GetAgeAssuranceStateResponse> {
      const envelope = await api.get<GetAgeAssuranceStateResponse>("/xrpc/app.bsky.unspecced.getAgeAssuranceState", params);
      return envelope;
    },

    /** Get miscellaneous runtime configuration. */
    async getConfig2(params: GetConfig2Params): Promise<GetConfig2Response> {
      const envelope = await api.get<GetConfig2Response>("/xrpc/app.bsky.unspecced.getConfig", params);
      return envelope;
    },

    /** Get a list of suggested starterpacks for onboarding */
    async getOnboardingSuggestedStarterPacks(params: GetOnboardingSuggestedStarterPacksParams): Promise<GetOnboardingSuggestedStarterPacksResponse> {
      const envelope = await api.get<GetOnboardingSuggestedStarterPacksResponse>("/xrpc/app.bsky.unspecced.getOnboardingSuggestedStarterPacks", params);
      return envelope;
    },

    /** Get a skeleton of suggested starterpacks for onboarding. Intended to be called and hydrated by app.bsky.unspecced.getOnboardingSuggestedStarterPacks */
    async getOnboardingSuggestedStarterPacksSkeleton(params: GetOnboardingSuggestedStarterPacksSkeletonParams): Promise<GetOnboardingSuggestedStarterPacksSkeletonResponse> {
      const envelope = await api.get<GetOnboardingSuggestedStarterPacksSkeletonResponse>("/xrpc/app.bsky.unspecced.getOnboardingSuggestedStarterPacksSkeleton", params);
      return envelope;
    },

    /** Get a skeleton of suggested users for onboarding. Intended to be called and hydrated by app.bsky.unspecced.getSuggestedOnboardingUsers */
    async getOnboardingSuggestedUsersSkeleton(params: GetOnboardingSuggestedUsersSkeletonParams): Promise<GetOnboardingSuggestedUsersSkeletonResponse> {
      const envelope = await api.get<GetOnboardingSuggestedUsersSkeletonResponse>("/xrpc/app.bsky.unspecced.getOnboardingSuggestedUsersSkeleton", params);
      return envelope;
    },

    /** An unspecced view of globally popular feed generators. */
    async getPopularFeedGenerators(params: GetPopularFeedGeneratorsParams): Promise<GetPopularFeedGeneratorsResponse> {
      const envelope = await api.get<GetPopularFeedGeneratorsResponse>("/xrpc/app.bsky.unspecced.getPopularFeedGenerators", params);
      return envelope;
    },

    /** (NOTE: this endpoint is under development and WILL change without notice. Don't use it until it is moved out of 'unspecced' or your application WILL break) Get additional posts under a thread e.g. replies hidden by threadgate. Based on an anchor post at any depth of the tree, returns top-level replies below that anchor. It does not include ancestors nor the anchor itself. This should be called after exhausting 'app.bsky.unspecced.getPostThreadV2'. Does not require auth, but additional metadata and filtering will be applied for authed requests. */
    async getPostThreadOtherV2(params: GetPostThreadOtherV2Params): Promise<GetPostThreadOtherV2Response> {
      const envelope = await api.get<GetPostThreadOtherV2Response>("/xrpc/app.bsky.unspecced.getPostThreadOtherV2", params);
      return envelope;
    },

    /** (NOTE: this endpoint is under development and WILL change without notice. Don't use it until it is moved out of 'unspecced' or your application WILL break) Get posts in a thread. It is based in an anchor post at any depth of the tree, and returns posts above it (recursively resolving the parent, without further branching to their replies) and below it (recursive replies, with branching to their replies). Does not require auth, but additional metadata and filtering will be applied for authed requests. */
    async getPostThreadV2(params: GetPostThreadV2Params): Promise<GetPostThreadV2Response> {
      const envelope = await api.get<GetPostThreadV2Response>("/xrpc/app.bsky.unspecced.getPostThreadV2", params);
      return envelope;
    },

    /** Get a list of suggested feeds */
    async getSuggestedFeeds2(params: GetSuggestedFeeds2Params): Promise<GetSuggestedFeeds2Response> {
      const envelope = await api.get<GetSuggestedFeeds2Response>("/xrpc/app.bsky.unspecced.getSuggestedFeeds", params);
      return envelope;
    },

    /** Get a skeleton of suggested feeds. Intended to be called and hydrated by app.bsky.unspecced.getSuggestedFeeds */
    async getSuggestedFeedsSkeleton(params: GetSuggestedFeedsSkeletonParams): Promise<GetSuggestedFeedsSkeletonResponse> {
      const envelope = await api.get<GetSuggestedFeedsSkeletonResponse>("/xrpc/app.bsky.unspecced.getSuggestedFeedsSkeleton", params);
      return envelope;
    },

    /** Get a list of suggested users for onboarding */
    async getSuggestedOnboardingUsers(params: GetSuggestedOnboardingUsersParams): Promise<GetSuggestedOnboardingUsersResponse> {
      const envelope = await api.get<GetSuggestedOnboardingUsersResponse>("/xrpc/app.bsky.unspecced.getSuggestedOnboardingUsers", params);
      return envelope;
    },

    /** Get a list of suggested starterpacks */
    async getSuggestedStarterPacks(params: GetSuggestedStarterPacksParams): Promise<GetSuggestedStarterPacksResponse> {
      const envelope = await api.get<GetSuggestedStarterPacksResponse>("/xrpc/app.bsky.unspecced.getSuggestedStarterPacks", params);
      return envelope;
    },

    /** Get a skeleton of suggested starterpacks. Intended to be called and hydrated by app.bsky.unspecced.getSuggestedStarterpacks */
    async getSuggestedStarterPacksSkeleton(params: GetSuggestedStarterPacksSkeletonParams): Promise<GetSuggestedStarterPacksSkeletonResponse> {
      const envelope = await api.get<GetSuggestedStarterPacksSkeletonResponse>("/xrpc/app.bsky.unspecced.getSuggestedStarterPacksSkeleton", params);
      return envelope;
    },

    /** Get a list of suggested users */
    async getSuggestedUsers(params: GetSuggestedUsersParams): Promise<GetSuggestedUsersResponse> {
      const envelope = await api.get<GetSuggestedUsersResponse>("/xrpc/app.bsky.unspecced.getSuggestedUsers", params);
      return envelope;
    },

    /** Get a list of suggested users for the Discover page */
    async getSuggestedUsersForDiscover(params: GetSuggestedUsersForDiscoverParams): Promise<GetSuggestedUsersForDiscoverResponse> {
      const envelope = await api.get<GetSuggestedUsersForDiscoverResponse>("/xrpc/app.bsky.unspecced.getSuggestedUsersForDiscover", params);
      return envelope;
    },

    /** Get a skeleton of suggested users for the Discover page. Intended to be called and hydrated by app.bsky.unspecced.getSuggestedUsersForDiscover */
    async getSuggestedUsersForDiscoverSkeleton(params: GetSuggestedUsersForDiscoverSkeletonParams): Promise<GetSuggestedUsersForDiscoverSkeletonResponse> {
      const envelope = await api.get<GetSuggestedUsersForDiscoverSkeletonResponse>("/xrpc/app.bsky.unspecced.getSuggestedUsersForDiscoverSkeleton", params);
      return envelope;
    },

    /** Get a list of suggested users for the Explore page */
    async getSuggestedUsersForExplore(params: GetSuggestedUsersForExploreParams): Promise<GetSuggestedUsersForExploreResponse> {
      const envelope = await api.get<GetSuggestedUsersForExploreResponse>("/xrpc/app.bsky.unspecced.getSuggestedUsersForExplore", params);
      return envelope;
    },

    /** Get a skeleton of suggested users for the Explore page. Intended to be called and hydrated by app.bsky.unspecced.getSuggestedUsersForExplore */
    async getSuggestedUsersForExploreSkeleton(params: GetSuggestedUsersForExploreSkeletonParams): Promise<GetSuggestedUsersForExploreSkeletonResponse> {
      const envelope = await api.get<GetSuggestedUsersForExploreSkeletonResponse>("/xrpc/app.bsky.unspecced.getSuggestedUsersForExploreSkeleton", params);
      return envelope;
    },

    /** Get a list of suggested users for the See More page */
    async getSuggestedUsersForSeeMore(params: GetSuggestedUsersForSeeMoreParams): Promise<GetSuggestedUsersForSeeMoreResponse> {
      const envelope = await api.get<GetSuggestedUsersForSeeMoreResponse>("/xrpc/app.bsky.unspecced.getSuggestedUsersForSeeMore", params);
      return envelope;
    },

    /** Get a skeleton of suggested users for the See More page. Intended to be called and hydrated by app.bsky.unspecced.getSuggestedUsersForSeeMore */
    async getSuggestedUsersForSeeMoreSkeleton(params: GetSuggestedUsersForSeeMoreSkeletonParams): Promise<GetSuggestedUsersForSeeMoreSkeletonResponse> {
      const envelope = await api.get<GetSuggestedUsersForSeeMoreSkeletonResponse>("/xrpc/app.bsky.unspecced.getSuggestedUsersForSeeMoreSkeleton", params);
      return envelope;
    },

    /** Get a skeleton of suggested users. Intended to be called and hydrated by app.bsky.unspecced.getSuggestedUsers */
    async getSuggestedUsersSkeleton(params: GetSuggestedUsersSkeletonParams): Promise<GetSuggestedUsersSkeletonResponse> {
      const envelope = await api.get<GetSuggestedUsersSkeletonResponse>("/xrpc/app.bsky.unspecced.getSuggestedUsersSkeleton", params);
      return envelope;
    },

    /** Get a skeleton of suggested actors. Intended to be called and then hydrated through app.bsky.actor.getSuggestions */
    async getSuggestionsSkeleton(params: GetSuggestionsSkeletonParams): Promise<GetSuggestionsSkeletonResponse> {
      const envelope = await api.get<GetSuggestionsSkeletonResponse>("/xrpc/app.bsky.unspecced.getSuggestionsSkeleton", params);
      return envelope;
    },

    /** Get a list of suggestions (feeds and users) tagged with categories */
    async getTaggedSuggestions(params: GetTaggedSuggestionsParams): Promise<GetTaggedSuggestionsResponse> {
      const envelope = await api.get<GetTaggedSuggestionsResponse>("/xrpc/app.bsky.unspecced.getTaggedSuggestions", params);
      return envelope;
    },

    /** Get a list of trending topics */
    async getTrendingTopics(params: GetTrendingTopicsParams): Promise<GetTrendingTopicsResponse> {
      const envelope = await api.get<GetTrendingTopicsResponse>("/xrpc/app.bsky.unspecced.getTrendingTopics", params);
      return envelope;
    },

    /** Get the current trends on the network */
    async getTrends(params: GetTrendsParams): Promise<GetTrendsResponse> {
      const envelope = await api.get<GetTrendsResponse>("/xrpc/app.bsky.unspecced.getTrends", params);
      return envelope;
    },

    /** Get the skeleton of trends on the network. Intended to be called and then hydrated through app.bsky.unspecced.getTrends */
    async getTrendsSkeleton(params: GetTrendsSkeletonParams): Promise<GetTrendsSkeletonResponse> {
      const envelope = await api.get<GetTrendsSkeletonResponse>("/xrpc/app.bsky.unspecced.getTrendsSkeleton", params);
      return envelope;
    },

    /** Initiate age assurance for an account. This is a one-time action that will start the process of verifying the user's age. */
    async initAgeAssurance(params: InitAgeAssuranceParams): Promise<InitAgeAssuranceResponse> {
      const envelope = await api.post<InitAgeAssuranceResponse>("/xrpc/app.bsky.unspecced.initAgeAssurance", params, undefined);
      return envelope;
    },

    /** Backend Actors (profile) search, returns only skeleton. */
    async searchActorsSkeleton(params: SearchActorsSkeletonParams): Promise<SearchActorsSkeletonResponse> {
      const envelope = await api.get<SearchActorsSkeletonResponse>("/xrpc/app.bsky.unspecced.searchActorsSkeleton", params);
      return envelope;
    },

    /** Backend Posts search, returns only skeleton */
    async searchPostsSkeleton(params: SearchPostsSkeletonParams): Promise<SearchPostsSkeletonResponse> {
      const envelope = await api.get<SearchPostsSkeletonResponse>("/xrpc/app.bsky.unspecced.searchPostsSkeleton", params);
      return envelope;
    },

    /** Backend Starter Pack search, returns only skeleton. */
    async searchStarterPacksSkeleton(params: SearchStarterPacksSkeletonParams): Promise<SearchStarterPacksSkeletonResponse> {
      const envelope = await api.get<SearchStarterPacksSkeletonResponse>("/xrpc/app.bsky.unspecced.searchStarterPacksSkeleton", params);
      return envelope;
    },
  };
}
