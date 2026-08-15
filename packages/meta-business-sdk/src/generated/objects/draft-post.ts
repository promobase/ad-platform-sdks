// @generated
// fingerprint: sha256:580c14690bec8693289895a01c00e1800c8b94aca187dae791a81b863df1ad84
// DO NOT EDIT: generated file; changes will be overwritten.
import type { PlaceFields } from "./place.ts";
import type { TargetingFields } from "./targeting.ts";
import type { UserFields } from "./user.ts";

export interface DraftPostFields {
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

