import type { PlaceFields } from "./place.ts";
import type { TargetingFields } from "./targeting.ts";
import type { UserFields } from "./user.ts";

export interface ScheduledPostFields {
  admin_creator: UserFields;
  creation_time: string;
  feed_audience_description: string;
  feed_targeting: TargetingFields;
  id: string;
  is_post_in_good_state: boolean;
  message: string;
  modified_time: string;
  og_action_summary: string;
  permalink_url: string;
  place: PlaceFields;
  privacy_description: string;
  scheduled_failure_notice: string;
  scheduled_publish_time: string;
  story_token: string;
  thumbnail: string;
  video_id: string;
}

