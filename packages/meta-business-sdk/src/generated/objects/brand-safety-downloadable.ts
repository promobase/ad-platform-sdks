// @generated
// fingerprint: sha256:7ce5c4adfb01ab950cb7b00439132eed92fc82b15eed91bb87b57ad8f5b8cf7b
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ApiClient } from "@openpromo/sdk-runtime";

export interface BrandSafetyDownloadableFields {
  account_context_id: string;
  async_job_percent_complete: number;
  async_job_status: string;
  file_name: string;
  id: string;
  request_surface: string;
  url: string;
}

export function brandSafetyDownloadableNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as BrandSafetyDownloadableFields,
    get: <F extends (keyof BrandSafetyDownloadableFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<BrandSafetyDownloadableFields, F[number]>>(`${id}`, opts),
  };
}

