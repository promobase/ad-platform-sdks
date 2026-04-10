import type { ApiClient } from "@promobase/sdk-runtime";

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
    __path: id,
    __brand: undefined as unknown as PageUserMessageThreadLabelFields,
    get: <F extends (keyof PageUserMessageThreadLabelFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<PageUserMessageThreadLabelFields, F[number]>>(`${id}`, opts),
    delete: () =>
      client.delete(`${id}`, {}),
    label: {
      __path: `${id}/label`,
      __brand: undefined as unknown as PageUserMessageThreadLabelFields,
      create: (params: PageUserMessageThreadLabelCreateLabelParams) =>
        client.post<PageUserMessageThreadLabelFields>(`${id}/label`, params as Record<string, unknown>),
      delete: (params: PageUserMessageThreadLabelDeleteLabelParams) =>
        client.delete(`${id}/label`, params as Record<string, unknown> ?? {}),
    },
  };
}

