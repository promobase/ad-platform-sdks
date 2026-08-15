// @generated
// fingerprint: sha256:01d93c6aef679643b9f751292908ed80a719f48d3a32da9d3e441409bdf1425e
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

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

