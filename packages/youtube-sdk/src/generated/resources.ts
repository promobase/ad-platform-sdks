// This file was generated from google-discovery/youtube-v3.json.
// Do not edit by hand. Run `bun --filter='./packages/youtube-sdk' run codegen`.

import type { YouTubeClient, YouTubeRequestOptions } from "../client.ts";
import type * as YouTubeTypes from "./types.ts";

export function createYouTubeResources(client: YouTubeClient) {
  return {
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
    videos: {
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
  };
}

export type YouTubeResources = ReturnType<typeof createYouTubeResources>;
