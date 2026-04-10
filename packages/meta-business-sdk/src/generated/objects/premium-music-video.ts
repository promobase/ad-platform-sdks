export interface PremiumMusicVideoFields {
  creation_time: string;
  cross_post_videos: Record<string, unknown>[];
  eligible_cross_post_pages: Record<string, unknown>[];
  id: string;
  preferred_video_thumbnail_image_uri: string;
  premium_music_video_metadata: Record<string, unknown>;
  scheduled_publish_time: number;
  title: string;
}

