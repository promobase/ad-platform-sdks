// @generated
// fingerprint: sha256:7fbf7fe1428dce22e2e8500c8aea67543e192e278f0edc0282aa7eff4c3f8752
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdVideoAsset, InFeedVideoAdInfo, VideoBumperInStreamAdInfo, VideoNonSkippableInStreamAdInfo, VideoOutstreamAdInfo, VideoTrueViewInStreamAdInfo, YouTubeAudioAdInfo } from "../index.ts";

// Generated from google.ads.googleads.v23.common.VideoAdInfo. Do not edit by hand.
export interface VideoAdInfo {
  video?: AdVideoAsset;
  inStream?: VideoTrueViewInStreamAdInfo;
  bumper?: VideoBumperInStreamAdInfo;
  outStream?: VideoOutstreamAdInfo;
  nonSkippable?: VideoNonSkippableInStreamAdInfo;
  inFeed?: InFeedVideoAdInfo;
  audio?: YouTubeAudioAdInfo;
}
