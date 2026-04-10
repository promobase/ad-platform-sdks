import type { ApiClient } from "../../runtime/client.ts";
import type { AdVideoFields } from "./ad-video.ts";
import type { BusinessFields } from "./business.ts";

export interface BusinessVideoFields {
  business: BusinessFields;
  id: string;
  media_library_url: string;
  name: string;
  video: AdVideoFields;
}

export function businessVideoNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof BusinessVideoFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BusinessVideoFields, F[number]>>(`${id}`, opts),
  };
}

