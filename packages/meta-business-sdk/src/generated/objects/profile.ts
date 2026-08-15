// @generated
// fingerprint: sha256:dd620f2e019e2282190343116c2a1c7849b21acfa66dac17525a34f9b2791617
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";
import { Cursor } from "@openpromo/sdk-runtime";
import { graphPagination } from "../../pagination.ts";
import type { ProfilePictureSourceFields } from "./profile-picture-source.ts";
import type { ProfileProfileType, ProfileType } from "../enums.ts";

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
  profile_type: ProfileProfileType;
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
    __path: id,
    __brand: undefined as unknown as ProfileFields,
    get: <F extends (keyof ProfileFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<ProfileFields, F[number]>>(`${id}`, opts),
    picture: <F extends (keyof ProfilePictureSourceFields)[]>(opts: { fields: F; params?: ProfileListPictureParams }) =>
      new Cursor<Pick<ProfilePictureSourceFields, F[number]>>(client, `${id}/picture`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, graphPagination()),
  };
}

