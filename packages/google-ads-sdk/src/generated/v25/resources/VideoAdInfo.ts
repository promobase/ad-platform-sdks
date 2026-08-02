import type { AdVideoAsset, InFeedVideoAdInfo, VideoBumperInStreamAdInfo, VideoNonSkippableInStreamAdInfo, VideoOutstreamAdInfo, VideoTrueViewInStreamAdInfo, YouTubeAudioAdInfo } from "../index.ts";

// Generated from google.ads.googleads.v25.common.VideoAdInfo. Do not edit by hand.
export interface VideoAdInfo {
  video?: AdVideoAsset;
  inStream?: VideoTrueViewInStreamAdInfo;
  bumper?: VideoBumperInStreamAdInfo;
  outStream?: VideoOutstreamAdInfo;
  nonSkippable?: VideoNonSkippableInStreamAdInfo;
  inFeed?: InFeedVideoAdInfo;
  audio?: YouTubeAudioAdInfo;
}
