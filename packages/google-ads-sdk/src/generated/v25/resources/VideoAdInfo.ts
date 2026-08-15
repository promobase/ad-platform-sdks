// @generated
// fingerprint: sha256:ae14e1802150ba01644a917962748bba8d9c5814df2a55159dc90231916ee7c1
// DO NOT EDIT: generated file; changes will be overwritten.
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
