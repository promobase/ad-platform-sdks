import type { PostFields } from "./post.ts";

export interface EntWithSponsorFields {
  id: string;
  is_branded_content: boolean;
  owner_linked_instagram_user_v1_id: string;
  owner_picture: string;
  post_id: string;
  post_info: PostFields;
}

