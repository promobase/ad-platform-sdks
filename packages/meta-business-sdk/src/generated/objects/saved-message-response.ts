import type { ApiClient } from "@promobase/sdk-runtime";

export interface SavedMessageResponseFields {
  id: string;
  image: string;
  is_enabled: boolean;
  message: string;
  title: string;
}

export function savedMessageResponseNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof SavedMessageResponseFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<SavedMessageResponseFields, F[number]>>(`${id}`, opts),
  };
}

