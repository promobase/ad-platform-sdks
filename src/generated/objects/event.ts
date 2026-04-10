import type { ApiClient } from "../../runtime/client.ts";
import { Cursor } from "../../runtime/cursor.ts";
import type { ChildEventFields } from "./child-event.ts";
import type { CoverPhotoFields } from "./cover-photo.ts";
import type { EventRegistrationSettingFields } from "./event-registration-setting.ts";
import type { EventTicketSettingFields } from "./event-ticket-setting.ts";
import type { EventTicketTierFields } from "./event-ticket-tier.ts";
import type { GroupFields } from "./group.ts";
import type { NullNodeFields } from "./null-node.ts";
import type { PhotoFields } from "./photo.ts";
import type { PlaceFields } from "./place.ts";
import type { ProfileFields } from "./profile.ts";

export interface EventFields {
  attending_count: number;
  can_guests_invite: boolean;
  category: string;
  cover: CoverPhotoFields;
  created_time: string;
  declined_count: number;
  description: string;
  discount_code_enabled: boolean;
  end_time: string;
  event_times: ChildEventFields[];
  guest_list_enabled: boolean;
  id: string;
  interested_count: number;
  is_canceled: boolean;
  is_draft: boolean;
  is_online: boolean;
  is_page_owned: boolean;
  maybe_count: number;
  name: string;
  noreply_count: number;
  online_event_format: string;
  online_event_third_party_url: string;
  owner: Record<string, unknown>;
  parent_group: GroupFields;
  place: PlaceFields;
  registration_setting: EventRegistrationSettingFields;
  scheduled_publish_time: string;
  start_time: string;
  ticket_setting: EventTicketSettingFields;
  ticket_uri: string;
  ticket_uri_start_sales_time: string;
  ticketing_privacy_uri: string;
  ticketing_terms_uri: string;
  timezone: string;
  type: string;
  updated_time: string;
}

export interface EventCreateLiveVideosParams {
  content_tags?: string[];
  description?: string;
  enable_backup_ingest?: boolean;
  encoding_settings?: string;
  event_params?: Record<string, unknown>;
  fisheye_video_cropped?: boolean;
  front_z_rotation?: number;
  is_audio_only?: boolean;
  is_spherical?: boolean;
  original_fov?: number;
  privacy?: string;
  projection?: string;
  published?: boolean;
  schedule_custom_profile_image?: File | Blob | ReadableStream;
  spatial_audio_format?: string;
  status?: string;
  stereoscopic_mode?: string;
  stop_on_delete_stream?: boolean;
  stream_type?: string;
  title?: string;
  [key: string]: unknown;
}

export function eventNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof EventFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<EventFields, F[number]>>(`${id}`, opts),
    comments: <F extends (keyof NullNodeFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<NullNodeFields, F[number]>>(client, `${id}/comments`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    feed: <F extends (keyof NullNodeFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<NullNodeFields, F[number]>>(client, `${id}/feed`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    liveVideos: {
      list: <F extends (keyof NullNodeFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
        new Cursor<Pick<NullNodeFields, F[number]>>(client, `${id}/live_videos`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
      create: (params: EventCreateLiveVideosParams) =>
        client.post<NullNodeFields>(`${id}/live_videos`, params as Record<string, unknown>),
    },
    photos: <F extends (keyof NullNodeFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<NullNodeFields, F[number]>>(client, `${id}/photos`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    picture: <F extends (keyof NullNodeFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<NullNodeFields, F[number]>>(client, `${id}/picture`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    posts: <F extends (keyof NullNodeFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<NullNodeFields, F[number]>>(client, `${id}/posts`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    roles: <F extends (keyof ProfileFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<ProfileFields, F[number]>>(client, `${id}/roles`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    ticketTiers: <F extends (keyof EventTicketTierFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<EventTicketTierFields, F[number]>>(client, `${id}/ticket_tiers`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
    videos: <F extends (keyof NullNodeFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<NullNodeFields, F[number]>>(client, `${id}/videos`, opts as { fields: readonly string[]; params?: Record<string, unknown> }),
  };
}

