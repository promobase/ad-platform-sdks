// This file was generated from google-discovery/youtube-v3.json.
// Do not edit by hand. Run `bun --filter='./packages/youtube-sdk' run codegen`.

import type { YouTubeClient, YouTubeRequestOptions } from "../client.ts";
import type * as YouTubeTypes from "./types.ts";

export function createYouTubeResources(client: YouTubeClient) {
  return {
    abuseReports: {
      insert(params: YouTubeTypes.YouTubeAbuseReportsInsertParams, body: YouTubeTypes.AbuseReport, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.AbuseReport> {
        return client.request<YouTubeTypes.AbuseReport>({
          method: "POST",
          path: "youtube/v3/abuseReports",
          params,
          body,
          opts,
        });
      },
    },
    activities: {
      list(params: YouTubeTypes.YouTubeActivitiesListParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.ActivityListResponse> {
        return client.request<YouTubeTypes.ActivityListResponse>({
          method: "GET",
          path: "youtube/v3/activities",
          params,
          opts,
        });
      },
    },
    captions: {
      delete(params: YouTubeTypes.YouTubeCaptionsDeleteParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<void> {
        return client.request<void>({
          method: "DELETE",
          path: "youtube/v3/captions",
          params,
          opts,
        });
      },
      download(params: YouTubeTypes.YouTubeCaptionsDownloadParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<void> {
        return client.request<void>({
          method: "GET",
          path: "youtube/v3/captions/{id}",
          params,
          opts,
        });
      },
      insert(params: YouTubeTypes.YouTubeCaptionsInsertParams, body: YouTubeTypes.Caption, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.Caption> {
        return client.request<YouTubeTypes.Caption>({
          method: "POST",
          path: "youtube/v3/captions",
          params,
          body,
          opts,
        });
      },
      list(params: YouTubeTypes.YouTubeCaptionsListParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.CaptionListResponse> {
        return client.request<YouTubeTypes.CaptionListResponse>({
          method: "GET",
          path: "youtube/v3/captions",
          params,
          opts,
        });
      },
      update(params: YouTubeTypes.YouTubeCaptionsUpdateParams, body: YouTubeTypes.Caption, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.Caption> {
        return client.request<YouTubeTypes.Caption>({
          method: "PUT",
          path: "youtube/v3/captions",
          params,
          body,
          opts,
        });
      },
    },
    channelBanners: {
      insert(params: YouTubeTypes.YouTubeChannelBannersInsertParams, body: YouTubeTypes.ChannelBannerResource, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.ChannelBannerResource> {
        return client.request<YouTubeTypes.ChannelBannerResource>({
          method: "POST",
          path: "youtube/v3/channelBanners/insert",
          params,
          body,
          opts,
        });
      },
    },
    channelSections: {
      delete(params: YouTubeTypes.YouTubeChannelSectionsDeleteParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<void> {
        return client.request<void>({
          method: "DELETE",
          path: "youtube/v3/channelSections",
          params,
          opts,
        });
      },
      insert(params: YouTubeTypes.YouTubeChannelSectionsInsertParams, body: YouTubeTypes.ChannelSection, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.ChannelSection> {
        return client.request<YouTubeTypes.ChannelSection>({
          method: "POST",
          path: "youtube/v3/channelSections",
          params,
          body,
          opts,
        });
      },
      list(params: YouTubeTypes.YouTubeChannelSectionsListParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.ChannelSectionListResponse> {
        return client.request<YouTubeTypes.ChannelSectionListResponse>({
          method: "GET",
          path: "youtube/v3/channelSections",
          params,
          opts,
        });
      },
      update(params: YouTubeTypes.YouTubeChannelSectionsUpdateParams, body: YouTubeTypes.ChannelSection, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.ChannelSection> {
        return client.request<YouTubeTypes.ChannelSection>({
          method: "PUT",
          path: "youtube/v3/channelSections",
          params,
          body,
          opts,
        });
      },
    },
    channels: {
      list(params: YouTubeTypes.YouTubeChannelsListParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.ChannelListResponse> {
        return client.request<YouTubeTypes.ChannelListResponse>({
          method: "GET",
          path: "youtube/v3/channels",
          params,
          opts,
        });
      },
      update(params: YouTubeTypes.YouTubeChannelsUpdateParams, body: YouTubeTypes.Channel, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.Channel> {
        return client.request<YouTubeTypes.Channel>({
          method: "PUT",
          path: "youtube/v3/channels",
          params,
          body,
          opts,
        });
      },
    },
    commentThreads: {
      insert(params: YouTubeTypes.YouTubeCommentThreadsInsertParams, body: YouTubeTypes.CommentThread, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.CommentThread> {
        return client.request<YouTubeTypes.CommentThread>({
          method: "POST",
          path: "youtube/v3/commentThreads",
          params,
          body,
          opts,
        });
      },
      list(params: YouTubeTypes.YouTubeCommentThreadsListParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.CommentThreadListResponse> {
        return client.request<YouTubeTypes.CommentThreadListResponse>({
          method: "GET",
          path: "youtube/v3/commentThreads",
          params,
          opts,
        });
      },
    },
    comments: {
      delete(params: YouTubeTypes.YouTubeCommentsDeleteParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<void> {
        return client.request<void>({
          method: "DELETE",
          path: "youtube/v3/comments",
          params,
          opts,
        });
      },
      insert(params: YouTubeTypes.YouTubeCommentsInsertParams, body: YouTubeTypes.Comment, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.Comment> {
        return client.request<YouTubeTypes.Comment>({
          method: "POST",
          path: "youtube/v3/comments",
          params,
          body,
          opts,
        });
      },
      list(params: YouTubeTypes.YouTubeCommentsListParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.CommentListResponse> {
        return client.request<YouTubeTypes.CommentListResponse>({
          method: "GET",
          path: "youtube/v3/comments",
          params,
          opts,
        });
      },
      markAsSpam(params: YouTubeTypes.YouTubeCommentsMarkAsSpamParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<void> {
        return client.request<void>({
          method: "POST",
          path: "youtube/v3/comments/markAsSpam",
          params,
          opts,
        });
      },
      setModerationStatus(params: YouTubeTypes.YouTubeCommentsSetModerationStatusParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<void> {
        return client.request<void>({
          method: "POST",
          path: "youtube/v3/comments/setModerationStatus",
          params,
          opts,
        });
      },
      update(params: YouTubeTypes.YouTubeCommentsUpdateParams, body: YouTubeTypes.Comment, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.Comment> {
        return client.request<YouTubeTypes.Comment>({
          method: "PUT",
          path: "youtube/v3/comments",
          params,
          body,
          opts,
        });
      },
    },
    i18nLanguages: {
      list(params: YouTubeTypes.YouTubeI18nLanguagesListParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.I18nLanguageListResponse> {
        return client.request<YouTubeTypes.I18nLanguageListResponse>({
          method: "GET",
          path: "youtube/v3/i18nLanguages",
          params,
          opts,
        });
      },
    },
    i18nRegions: {
      list(params: YouTubeTypes.YouTubeI18nRegionsListParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.I18nRegionListResponse> {
        return client.request<YouTubeTypes.I18nRegionListResponse>({
          method: "GET",
          path: "youtube/v3/i18nRegions",
          params,
          opts,
        });
      },
    },
    liveBroadcasts: {
      bind(params: YouTubeTypes.YouTubeLiveBroadcastsBindParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.LiveBroadcast> {
        return client.request<YouTubeTypes.LiveBroadcast>({
          method: "POST",
          path: "youtube/v3/liveBroadcasts/bind",
          params,
          opts,
        });
      },
      delete(params: YouTubeTypes.YouTubeLiveBroadcastsDeleteParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<void> {
        return client.request<void>({
          method: "DELETE",
          path: "youtube/v3/liveBroadcasts",
          params,
          opts,
        });
      },
      insert(params: YouTubeTypes.YouTubeLiveBroadcastsInsertParams, body: YouTubeTypes.LiveBroadcast, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.LiveBroadcast> {
        return client.request<YouTubeTypes.LiveBroadcast>({
          method: "POST",
          path: "youtube/v3/liveBroadcasts",
          params,
          body,
          opts,
        });
      },
      insertCuepoint(params: YouTubeTypes.YouTubeLiveBroadcastsInsertCuepointParams, body: YouTubeTypes.Cuepoint, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.Cuepoint> {
        return client.request<YouTubeTypes.Cuepoint>({
          method: "POST",
          path: "youtube/v3/liveBroadcasts/cuepoint",
          params,
          body,
          opts,
        });
      },
      list(params: YouTubeTypes.YouTubeLiveBroadcastsListParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.LiveBroadcastListResponse> {
        return client.request<YouTubeTypes.LiveBroadcastListResponse>({
          method: "GET",
          path: "youtube/v3/liveBroadcasts",
          params,
          opts,
        });
      },
      transition(params: YouTubeTypes.YouTubeLiveBroadcastsTransitionParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.LiveBroadcast> {
        return client.request<YouTubeTypes.LiveBroadcast>({
          method: "POST",
          path: "youtube/v3/liveBroadcasts/transition",
          params,
          opts,
        });
      },
      update(params: YouTubeTypes.YouTubeLiveBroadcastsUpdateParams, body: YouTubeTypes.LiveBroadcast, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.LiveBroadcast> {
        return client.request<YouTubeTypes.LiveBroadcast>({
          method: "PUT",
          path: "youtube/v3/liveBroadcasts",
          params,
          body,
          opts,
        });
      },
    },
    liveChatBans: {
      delete(params: YouTubeTypes.YouTubeLiveChatBansDeleteParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<void> {
        return client.request<void>({
          method: "DELETE",
          path: "youtube/v3/liveChat/bans",
          params,
          opts,
        });
      },
      insert(params: YouTubeTypes.YouTubeLiveChatBansInsertParams, body: YouTubeTypes.LiveChatBan, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.LiveChatBan> {
        return client.request<YouTubeTypes.LiveChatBan>({
          method: "POST",
          path: "youtube/v3/liveChat/bans",
          params,
          body,
          opts,
        });
      },
    },
    liveChatMessages: {
      delete(params: YouTubeTypes.YouTubeLiveChatMessagesDeleteParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<void> {
        return client.request<void>({
          method: "DELETE",
          path: "youtube/v3/liveChat/messages",
          params,
          opts,
        });
      },
      insert(params: YouTubeTypes.YouTubeLiveChatMessagesInsertParams, body: YouTubeTypes.LiveChatMessage, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.LiveChatMessage> {
        return client.request<YouTubeTypes.LiveChatMessage>({
          method: "POST",
          path: "youtube/v3/liveChat/messages",
          params,
          body,
          opts,
        });
      },
      list(params: YouTubeTypes.YouTubeLiveChatMessagesListParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.LiveChatMessageListResponse> {
        return client.request<YouTubeTypes.LiveChatMessageListResponse>({
          method: "GET",
          path: "youtube/v3/liveChat/messages",
          params,
          opts,
        });
      },
      transition(params: YouTubeTypes.YouTubeLiveChatMessagesTransitionParams = {}, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.LiveChatMessage> {
        return client.request<YouTubeTypes.LiveChatMessage>({
          method: "POST",
          path: "youtube/v3/liveChat/messages/transition",
          params,
          opts,
        });
      },
    },
    liveChatModerators: {
      delete(params: YouTubeTypes.YouTubeLiveChatModeratorsDeleteParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<void> {
        return client.request<void>({
          method: "DELETE",
          path: "youtube/v3/liveChat/moderators",
          params,
          opts,
        });
      },
      insert(params: YouTubeTypes.YouTubeLiveChatModeratorsInsertParams, body: YouTubeTypes.LiveChatModerator, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.LiveChatModerator> {
        return client.request<YouTubeTypes.LiveChatModerator>({
          method: "POST",
          path: "youtube/v3/liveChat/moderators",
          params,
          body,
          opts,
        });
      },
      list(params: YouTubeTypes.YouTubeLiveChatModeratorsListParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.LiveChatModeratorListResponse> {
        return client.request<YouTubeTypes.LiveChatModeratorListResponse>({
          method: "GET",
          path: "youtube/v3/liveChat/moderators",
          params,
          opts,
        });
      },
    },
    liveStreams: {
      delete(params: YouTubeTypes.YouTubeLiveStreamsDeleteParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<void> {
        return client.request<void>({
          method: "DELETE",
          path: "youtube/v3/liveStreams",
          params,
          opts,
        });
      },
      insert(params: YouTubeTypes.YouTubeLiveStreamsInsertParams, body: YouTubeTypes.LiveStream, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.LiveStream> {
        return client.request<YouTubeTypes.LiveStream>({
          method: "POST",
          path: "youtube/v3/liveStreams",
          params,
          body,
          opts,
        });
      },
      list(params: YouTubeTypes.YouTubeLiveStreamsListParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.LiveStreamListResponse> {
        return client.request<YouTubeTypes.LiveStreamListResponse>({
          method: "GET",
          path: "youtube/v3/liveStreams",
          params,
          opts,
        });
      },
      update(params: YouTubeTypes.YouTubeLiveStreamsUpdateParams, body: YouTubeTypes.LiveStream, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.LiveStream> {
        return client.request<YouTubeTypes.LiveStream>({
          method: "PUT",
          path: "youtube/v3/liveStreams",
          params,
          body,
          opts,
        });
      },
    },
    members: {
      list(params: YouTubeTypes.YouTubeMembersListParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.MemberListResponse> {
        return client.request<YouTubeTypes.MemberListResponse>({
          method: "GET",
          path: "youtube/v3/members",
          params,
          opts,
        });
      },
    },
    membershipsLevels: {
      list(params: YouTubeTypes.YouTubeMembershipsLevelsListParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.MembershipsLevelListResponse> {
        return client.request<YouTubeTypes.MembershipsLevelListResponse>({
          method: "GET",
          path: "youtube/v3/membershipsLevels",
          params,
          opts,
        });
      },
    },
    playlistImages: {
      delete(params: YouTubeTypes.YouTubePlaylistImagesDeleteParams = {}, body?: undefined, opts?: YouTubeRequestOptions): Promise<void> {
        return client.request<void>({
          method: "DELETE",
          path: "youtube/v3/playlistImages",
          params,
          opts,
        });
      },
      insert(params: YouTubeTypes.YouTubePlaylistImagesInsertParams, body: YouTubeTypes.PlaylistImage, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.PlaylistImage> {
        return client.request<YouTubeTypes.PlaylistImage>({
          method: "POST",
          path: "youtube/v3/playlistImages",
          params,
          body,
          opts,
        });
      },
      list(params: YouTubeTypes.YouTubePlaylistImagesListParams = {}, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.PlaylistImageListResponse> {
        return client.request<YouTubeTypes.PlaylistImageListResponse>({
          method: "GET",
          path: "youtube/v3/playlistImages",
          params,
          opts,
        });
      },
      update(params: YouTubeTypes.YouTubePlaylistImagesUpdateParams, body: YouTubeTypes.PlaylistImage, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.PlaylistImage> {
        return client.request<YouTubeTypes.PlaylistImage>({
          method: "PUT",
          path: "youtube/v3/playlistImages",
          params,
          body,
          opts,
        });
      },
    },
    playlistItems: {
      delete(params: YouTubeTypes.YouTubePlaylistItemsDeleteParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<void> {
        return client.request<void>({
          method: "DELETE",
          path: "youtube/v3/playlistItems",
          params,
          opts,
        });
      },
      insert(params: YouTubeTypes.YouTubePlaylistItemsInsertParams, body: YouTubeTypes.PlaylistItem, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.PlaylistItem> {
        return client.request<YouTubeTypes.PlaylistItem>({
          method: "POST",
          path: "youtube/v3/playlistItems",
          params,
          body,
          opts,
        });
      },
      list(params: YouTubeTypes.YouTubePlaylistItemsListParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.PlaylistItemListResponse> {
        return client.request<YouTubeTypes.PlaylistItemListResponse>({
          method: "GET",
          path: "youtube/v3/playlistItems",
          params,
          opts,
        });
      },
      update(params: YouTubeTypes.YouTubePlaylistItemsUpdateParams, body: YouTubeTypes.PlaylistItem, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.PlaylistItem> {
        return client.request<YouTubeTypes.PlaylistItem>({
          method: "PUT",
          path: "youtube/v3/playlistItems",
          params,
          body,
          opts,
        });
      },
    },
    playlists: {
      delete(params: YouTubeTypes.YouTubePlaylistsDeleteParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<void> {
        return client.request<void>({
          method: "DELETE",
          path: "youtube/v3/playlists",
          params,
          opts,
        });
      },
      insert(params: YouTubeTypes.YouTubePlaylistsInsertParams, body: YouTubeTypes.Playlist, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.Playlist> {
        return client.request<YouTubeTypes.Playlist>({
          method: "POST",
          path: "youtube/v3/playlists",
          params,
          body,
          opts,
        });
      },
      list(params: YouTubeTypes.YouTubePlaylistsListParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.PlaylistListResponse> {
        return client.request<YouTubeTypes.PlaylistListResponse>({
          method: "GET",
          path: "youtube/v3/playlists",
          params,
          opts,
        });
      },
      update(params: YouTubeTypes.YouTubePlaylistsUpdateParams, body: YouTubeTypes.Playlist, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.Playlist> {
        return client.request<YouTubeTypes.Playlist>({
          method: "PUT",
          path: "youtube/v3/playlists",
          params,
          body,
          opts,
        });
      },
    },
    search: {
      list(params: YouTubeTypes.YouTubeSearchListParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.SearchListResponse> {
        return client.request<YouTubeTypes.SearchListResponse>({
          method: "GET",
          path: "youtube/v3/search",
          params,
          opts,
        });
      },
    },
    subscriptions: {
      delete(params: YouTubeTypes.YouTubeSubscriptionsDeleteParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<void> {
        return client.request<void>({
          method: "DELETE",
          path: "youtube/v3/subscriptions",
          params,
          opts,
        });
      },
      insert(params: YouTubeTypes.YouTubeSubscriptionsInsertParams, body: YouTubeTypes.Subscription, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.Subscription> {
        return client.request<YouTubeTypes.Subscription>({
          method: "POST",
          path: "youtube/v3/subscriptions",
          params,
          body,
          opts,
        });
      },
      list(params: YouTubeTypes.YouTubeSubscriptionsListParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.SubscriptionListResponse> {
        return client.request<YouTubeTypes.SubscriptionListResponse>({
          method: "GET",
          path: "youtube/v3/subscriptions",
          params,
          opts,
        });
      },
    },
    superChatEvents: {
      list(params: YouTubeTypes.YouTubeSuperChatEventsListParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.SuperChatEventListResponse> {
        return client.request<YouTubeTypes.SuperChatEventListResponse>({
          method: "GET",
          path: "youtube/v3/superChatEvents",
          params,
          opts,
        });
      },
    },
    tests: {
      insert(params: YouTubeTypes.YouTubeTestsInsertParams, body: YouTubeTypes.TestItem, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.TestItem> {
        return client.request<YouTubeTypes.TestItem>({
          method: "POST",
          path: "youtube/v3/tests",
          params,
          body,
          opts,
        });
      },
    },
    thirdPartyLinks: {
      delete(params: YouTubeTypes.YouTubeThirdPartyLinksDeleteParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<void> {
        return client.request<void>({
          method: "DELETE",
          path: "youtube/v3/thirdPartyLinks",
          params,
          opts,
        });
      },
      insert(params: YouTubeTypes.YouTubeThirdPartyLinksInsertParams, body: YouTubeTypes.ThirdPartyLink, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.ThirdPartyLink> {
        return client.request<YouTubeTypes.ThirdPartyLink>({
          method: "POST",
          path: "youtube/v3/thirdPartyLinks",
          params,
          body,
          opts,
        });
      },
      list(params: YouTubeTypes.YouTubeThirdPartyLinksListParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.ThirdPartyLinkListResponse> {
        return client.request<YouTubeTypes.ThirdPartyLinkListResponse>({
          method: "GET",
          path: "youtube/v3/thirdPartyLinks",
          params,
          opts,
        });
      },
      update(params: YouTubeTypes.YouTubeThirdPartyLinksUpdateParams, body: YouTubeTypes.ThirdPartyLink, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.ThirdPartyLink> {
        return client.request<YouTubeTypes.ThirdPartyLink>({
          method: "PUT",
          path: "youtube/v3/thirdPartyLinks",
          params,
          body,
          opts,
        });
      },
    },
    thumbnails: {
      set(params: YouTubeTypes.YouTubeThumbnailsSetParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.ThumbnailSetResponse> {
        return client.request<YouTubeTypes.ThumbnailSetResponse>({
          method: "POST",
          path: "youtube/v3/thumbnails/set",
          params,
          opts,
        });
      },
    },
    videoAbuseReportReasons: {
      list(params: YouTubeTypes.YouTubeVideoAbuseReportReasonsListParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.VideoAbuseReportReasonListResponse> {
        return client.request<YouTubeTypes.VideoAbuseReportReasonListResponse>({
          method: "GET",
          path: "youtube/v3/videoAbuseReportReasons",
          params,
          opts,
        });
      },
    },
    videoCategories: {
      list(params: YouTubeTypes.YouTubeVideoCategoriesListParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.VideoCategoryListResponse> {
        return client.request<YouTubeTypes.VideoCategoryListResponse>({
          method: "GET",
          path: "youtube/v3/videoCategories",
          params,
          opts,
        });
      },
    },
    videoTrainability: {
      get(params: YouTubeTypes.YouTubeVideoTrainabilityGetParams = {}, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.VideoTrainability> {
        return client.request<YouTubeTypes.VideoTrainability>({
          method: "GET",
          path: "youtube/v3/videoTrainability",
          params,
          opts,
        });
      },
    },
    videos: {
      batchGetStats(params: YouTubeTypes.YouTubeVideosBatchGetStatsParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.BatchGetStatsResponse> {
        return client.request<YouTubeTypes.BatchGetStatsResponse>({
          method: "GET",
          path: "youtube/v3/videos:batchGetStats",
          params,
          opts,
        });
      },
      delete(params: YouTubeTypes.YouTubeVideosDeleteParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<void> {
        return client.request<void>({
          method: "DELETE",
          path: "youtube/v3/videos",
          params,
          opts,
        });
      },
      getRating(params: YouTubeTypes.YouTubeVideosGetRatingParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.VideoGetRatingResponse> {
        return client.request<YouTubeTypes.VideoGetRatingResponse>({
          method: "GET",
          path: "youtube/v3/videos/getRating",
          params,
          opts,
        });
      },
      insert(params: YouTubeTypes.YouTubeVideosInsertParams, body: YouTubeTypes.Video, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.Video> {
        return client.request<YouTubeTypes.Video>({
          method: "POST",
          path: "youtube/v3/videos",
          params,
          body,
          opts,
        });
      },
      list(params: YouTubeTypes.YouTubeVideosListParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.VideoListResponse> {
        return client.request<YouTubeTypes.VideoListResponse>({
          method: "GET",
          path: "youtube/v3/videos",
          params,
          opts,
        });
      },
      rate(params: YouTubeTypes.YouTubeVideosRateParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<void> {
        return client.request<void>({
          method: "POST",
          path: "youtube/v3/videos/rate",
          params,
          opts,
        });
      },
      reportAbuse(params: YouTubeTypes.YouTubeVideosReportAbuseParams, body: YouTubeTypes.VideoAbuseReport, opts?: YouTubeRequestOptions): Promise<void> {
        return client.request<void>({
          method: "POST",
          path: "youtube/v3/videos/reportAbuse",
          params,
          body,
          opts,
        });
      },
      update(params: YouTubeTypes.YouTubeVideosUpdateParams, body: YouTubeTypes.Video, opts?: YouTubeRequestOptions): Promise<YouTubeTypes.Video> {
        return client.request<YouTubeTypes.Video>({
          method: "PUT",
          path: "youtube/v3/videos",
          params,
          body,
          opts,
        });
      },
    },
    watermarks: {
      set(params: YouTubeTypes.YouTubeWatermarksSetParams, body: YouTubeTypes.InvideoBranding, opts?: YouTubeRequestOptions): Promise<void> {
        return client.request<void>({
          method: "POST",
          path: "youtube/v3/watermarks/set",
          params,
          body,
          opts,
        });
      },
      unset(params: YouTubeTypes.YouTubeWatermarksUnsetParams, body?: undefined, opts?: YouTubeRequestOptions): Promise<void> {
        return client.request<void>({
          method: "POST",
          path: "youtube/v3/watermarks/unset",
          params,
          opts,
        });
      },
    },
    youtube: {
    },
  };
}

export type YouTubeResources = ReturnType<typeof createYouTubeResources>;
