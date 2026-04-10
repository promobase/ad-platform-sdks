import type { ApiClient } from "../../runtime/client.ts";

export interface PageUserMessageThreadLabelFields {
  id: string;
  page_label_name: string;
}

export interface PageUserMessageThreadLabelDeleteLabelParams {
  user: number;
  [key: string]: unknown;
}

export interface PageUserMessageThreadLabelCreateLabelParams {
  user: number;
  [key: string]: unknown;
}

export function pageUserMessageThreadLabelNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof PageUserMessageThreadLabelFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PageUserMessageThreadLabelFields, F[number]>>(`${id}`, opts),
    delete: () =>
      client.delete(`${id}`, {}),
    label: {
      create: (params: PageUserMessageThreadLabelCreateLabelParams) =>
        client.post<Record<string, unknown>>(`${id}/label`, params as Record<string, unknown>),
      delete: (params: PageUserMessageThreadLabelDeleteLabelParams) =>
        client.delete(`${id}/label`, params as Record<string, unknown> ?? {}),
    },
  };
}

