export type PublishPlatform =
  | "facebook"
  | "instagram"
  | "threads"
  | "tiktok"
  | "linkedin"
  | "x"
  | "youtube";

export type PublishState = "processing" | "published" | "failed" | "timeout";

export interface PlatformPublishResult<Raw = unknown> {
  platform: PublishPlatform;
  state: PublishState;
  id?: string;
  postId?: string;
  raw: Raw;
}

export interface PlatformPublishError<Raw = unknown> {
  platform: PublishPlatform;
  state: Exclude<PublishState, "processing" | "published">;
  message: string;
  id?: string;
  raw?: Raw;
}
