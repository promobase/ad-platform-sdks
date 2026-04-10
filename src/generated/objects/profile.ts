import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { ProfilePictureSourceFields } from "./profile-picture-source.ts";

export interface ProfileFields {
  can_post: boolean;
  id: string;
  link: string;
  name: string;
  pic: string;
  pic_crop: ProfilePictureSourceFields;
  pic_large: string;
  pic_small: string;
  pic_square: string;
  profile_type: string;
  username: string;
}

export interface ProfileListPictureParams {
  height?: number;
  redirect?: boolean;
  type?: string;
  width?: number;
  [key: string]: unknown;
}

export function profileNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof ProfileFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ProfileFields, F[number]>>(`${id}`, opts),
    picture: <F extends (keyof ProfilePictureSourceFields)[]>(opts: { fields: F; params?: ProfileListPictureParams }) =>
      new Cursor<Pick<ProfilePictureSourceFields, F[number]>>(client, `${id}/picture`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

