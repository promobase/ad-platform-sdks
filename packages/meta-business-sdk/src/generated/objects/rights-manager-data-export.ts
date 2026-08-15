// @generated
// fingerprint: sha256:547ced97edc242494ebf765b920be951d77196489e1d56e4a5256853057c731b
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface RightsManagerDataExportFields {
  download_uri: string;
  export_scope: string;
  id: string;
  name: string;
  record_type: string;
  time_range_end: string;
  time_range_start: string;
}

export function rightsManagerDataExportNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as RightsManagerDataExportFields,
    get: <F extends (keyof RightsManagerDataExportFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<RightsManagerDataExportFields, F[number]>>(`${id}`, opts),
  };
}

