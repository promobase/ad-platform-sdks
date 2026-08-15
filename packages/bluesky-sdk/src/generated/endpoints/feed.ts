// @generated
// fingerprint: sha256:33dd245cfeac6fee05527902fa72d6fd2153ae30c9dc522d805dc66e16dd14e2
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for app.bsky.feed — do not edit
import type { BlueskyApiClient } from "../../api-client.ts";
import type { AppBskyFeedDescribeFeedGeneratorFeed, AppBskyFeedDescribeFeedGeneratorLinks, AppBskyFeedDefsGeneratorView, AppBskyFeedDefsFeedViewPost, AppBskyFeedDefsSkeletonFeedPost, AppBskyFeedGetLikesLike, AppBskyFeedDefsPostView, AppBskyFeedDefsThreadViewPost, AppBskyFeedDefsNotFoundPost, AppBskyFeedDefsBlockedPost, AppBskyFeedDefsThreadgateView, AppBskyActorDefsProfileView, AppBskyFeedDefsInteraction, DescribeFeedGeneratorResponse, GetActorFeedsResponse, GetActorLikesResponse, GetAuthorFeedResponse, GetFeedResponse, GetFeedGeneratorResponse, GetFeedGeneratorsResponse, GetFeedSkeletonResponse, GetLikesResponse, GetListFeedResponse, GetPostsResponse, GetPostThreadResponse, GetQuotesResponse, GetRepostedByResponse, GetSuggestedFeedsResponse, GetTimelineResponse, SearchPostsResponse, SearchPostsV2Response, SendInteractionsResponse } from "../types.ts";
import type { DescribeFeedGeneratorParams, GetActorFeedsParams, GetActorLikesParams, GetAuthorFeedParams, GetFeedParams, GetFeedGeneratorParams, GetFeedGeneratorsParams, GetFeedSkeletonParams, GetLikesParams, GetListFeedParams, GetPostsParams, GetPostThreadParams, GetQuotesParams, GetRepostedByParams, GetSuggestedFeedsParams, GetTimelineParams, SearchPostsParams, SearchPostsV2Params, SendInteractionsParams } from "../params.ts";

/** app.bsky.feed — 19 endpoints */
export function createFeedClient(api: BlueskyApiClient) {
  return {
    /** Get information about a feed generator, including policies and offered feed URIs. Does not require auth; implemented by Feed Generator services (not App View). */
    async describeFeedGenerator(params: DescribeFeedGeneratorParams): Promise<DescribeFeedGeneratorResponse> {
      const envelope = await api.get<DescribeFeedGeneratorResponse>("/xrpc/app.bsky.feed.describeFeedGenerator", params);
      return envelope;
    },

    /** Get a list of feeds (feed generator records) created by the actor (in the actor's repo). */
    async getActorFeeds(params: GetActorFeedsParams): Promise<GetActorFeedsResponse> {
      const envelope = await api.get<GetActorFeedsResponse>("/xrpc/app.bsky.feed.getActorFeeds", params);
      return envelope;
    },

    /** Get a list of posts liked by an actor. Requires auth, actor must be the requesting account. */
    async getActorLikes(params: GetActorLikesParams): Promise<GetActorLikesResponse> {
      const envelope = await api.get<GetActorLikesResponse>("/xrpc/app.bsky.feed.getActorLikes", params);
      return envelope;
    },

    /** Get a view of an actor's 'author feed' (post and reposts by the author). Does not require auth. */
    async getAuthorFeed(params: GetAuthorFeedParams): Promise<GetAuthorFeedResponse> {
      const envelope = await api.get<GetAuthorFeedResponse>("/xrpc/app.bsky.feed.getAuthorFeed", params);
      return envelope;
    },

    /** Get a hydrated feed from an actor's selected feed generator. Implemented by App View. */
    async getFeed(params: GetFeedParams): Promise<GetFeedResponse> {
      const envelope = await api.get<GetFeedResponse>("/xrpc/app.bsky.feed.getFeed", params);
      return envelope;
    },

    /** Get information about a feed generator. Implemented by AppView. */
    async getFeedGenerator(params: GetFeedGeneratorParams): Promise<GetFeedGeneratorResponse> {
      const envelope = await api.get<GetFeedGeneratorResponse>("/xrpc/app.bsky.feed.getFeedGenerator", params);
      return envelope;
    },

    /** Get information about a list of feed generators. */
    async getFeedGenerators(params: GetFeedGeneratorsParams): Promise<GetFeedGeneratorsResponse> {
      const envelope = await api.get<GetFeedGeneratorsResponse>("/xrpc/app.bsky.feed.getFeedGenerators", params);
      return envelope;
    },

    /** Get a skeleton of a feed provided by a feed generator. Auth is optional, depending on provider requirements, and provides the DID of the requester. Implemented by Feed Generator Service. */
    async getFeedSkeleton(params: GetFeedSkeletonParams): Promise<GetFeedSkeletonResponse> {
      const envelope = await api.get<GetFeedSkeletonResponse>("/xrpc/app.bsky.feed.getFeedSkeleton", params);
      return envelope;
    },

    /** Get like records which reference a subject (by AT-URI and CID). */
    async getLikes(params: GetLikesParams): Promise<GetLikesResponse> {
      const envelope = await api.get<GetLikesResponse>("/xrpc/app.bsky.feed.getLikes", params);
      return envelope;
    },

    /** Get a feed of recent posts from a list (posts and reposts from any actors on the list). Does not require auth. */
    async getListFeed(params: GetListFeedParams): Promise<GetListFeedResponse> {
      const envelope = await api.get<GetListFeedResponse>("/xrpc/app.bsky.feed.getListFeed", params);
      return envelope;
    },

    /** Gets post views for a specified list of posts (by AT-URI). This is sometimes referred to as 'hydrating' a 'feed skeleton'. */
    async getPosts(params: GetPostsParams): Promise<GetPostsResponse> {
      const envelope = await api.get<GetPostsResponse>("/xrpc/app.bsky.feed.getPosts", params);
      return envelope;
    },

    /** Get posts in a thread. Does not require auth, but additional metadata and filtering will be applied for authed requests. */
    async getPostThread(params: GetPostThreadParams): Promise<GetPostThreadResponse> {
      const envelope = await api.get<GetPostThreadResponse>("/xrpc/app.bsky.feed.getPostThread", params);
      return envelope;
    },

    /** Get a list of quotes for a given post. */
    async getQuotes(params: GetQuotesParams): Promise<GetQuotesResponse> {
      const envelope = await api.get<GetQuotesResponse>("/xrpc/app.bsky.feed.getQuotes", params);
      return envelope;
    },

    /** Get a list of reposts for a given post. */
    async getRepostedBy(params: GetRepostedByParams): Promise<GetRepostedByResponse> {
      const envelope = await api.get<GetRepostedByResponse>("/xrpc/app.bsky.feed.getRepostedBy", params);
      return envelope;
    },

    /** Get a list of suggested feeds (feed generators) for the requesting account. */
    async getSuggestedFeeds(params: GetSuggestedFeedsParams): Promise<GetSuggestedFeedsResponse> {
      const envelope = await api.get<GetSuggestedFeedsResponse>("/xrpc/app.bsky.feed.getSuggestedFeeds", params);
      return envelope;
    },

    /** Get a view of the requesting account's home timeline. This is expected to be some form of reverse-chronological feed. */
    async getTimeline(params: GetTimelineParams): Promise<GetTimelineResponse> {
      const envelope = await api.get<GetTimelineResponse>("/xrpc/app.bsky.feed.getTimeline", params);
      return envelope;
    },

    /** Find posts matching search criteria, returning views of those posts. Note that this API endpoint may require authentication (eg, not public) for some service providers and implementations. */
    async searchPosts(params: SearchPostsParams): Promise<SearchPostsResponse> {
      const envelope = await api.get<SearchPostsResponse>("/xrpc/app.bsky.feed.searchPosts", params);
      return envelope;
    },

    /** Find posts matching a search query or filters, returning search hits for matching post records. */
    async searchPostsV2(params: SearchPostsV2Params): Promise<SearchPostsV2Response> {
      const envelope = await api.get<SearchPostsV2Response>("/xrpc/app.bsky.feed.searchPostsV2", params);
      return envelope;
    },

    /** Send information about interactions with feed items back to the feed generator that served them. */
    async sendInteractions(params: SendInteractionsParams): Promise<SendInteractionsResponse> {
      const envelope = await api.post<SendInteractionsResponse>("/xrpc/app.bsky.feed.sendInteractions", params, undefined);
      return envelope;
    },
  };
}
