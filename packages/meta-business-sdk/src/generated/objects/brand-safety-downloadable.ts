import type { ApiClient } from "@promobase/sdk-runtime";

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

