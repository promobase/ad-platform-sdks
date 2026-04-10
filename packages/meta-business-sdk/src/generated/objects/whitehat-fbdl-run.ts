import type { ApiClient } from "@promobase/sdk-runtime";

export interface WhitehatFBDLRunFields {
  creation_time: string;
  id: string;
  is_pinned: boolean;
  note: string;
  result: Record<string, string>[];
  run_code: string;
  status: string;
  user_type: string;
}

export function whitehatFBDLRunNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as WhitehatFBDLRunFields,
    get: <F extends (keyof WhitehatFBDLRunFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<WhitehatFBDLRunFields, F[number]>>(`${id}`, opts),
  };
}

