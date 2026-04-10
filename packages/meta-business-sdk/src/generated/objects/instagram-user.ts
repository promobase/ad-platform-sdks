import type { ApiClient } from "@promobase/sdk-runtime";
import { Cursor } from "@promobase/sdk-runtime";
import { metaPagination } from "../../pagination.ts";
import type { BusinessFields } from "./business.ts";
import type { IGUpcomingEventFields } from "./ig-upcoming-event.ts";
import type { ShopFields } from "./shop.ts";

export interface InstagramUserFields {
  follow_count: number;
  followed_by_count: number;
  has_profile_picture: boolean;
  id: string;
  ig_user_id: string;
  is_private: boolean;
  is_published: boolean;
  media_count: number;
  mini_shop_storefront: ShopFields;
  owner_business: BusinessFields;
  profile_pic: string;
  username: string;
}

export function instagramUserNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as InstagramUserFields,
    get: <F extends (keyof InstagramUserFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<InstagramUserFields, F[number]>>(`${id}`, opts),
    upcomingEvents: <F extends (keyof IGUpcomingEventFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      new Cursor<Pick<IGUpcomingEventFields, F[number]>>(client, `${id}/upcoming_events`, opts as { fields: readonly string[]; params?: Record<string, unknown> }, metaPagination()),
  };
}

