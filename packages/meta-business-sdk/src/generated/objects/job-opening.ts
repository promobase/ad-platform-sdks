import type { ApiClient } from "@promobase/sdk-runtime";
import type { PageFields } from "./page.ts";
import type { PhotoFields } from "./photo.ts";
import type { PostFields } from "./post.ts";
import type { JobOpeningJobStatus, JobOpeningPlatformReviewStatus, JobOpeningReviewRejectionReasons, JobOpeningType } from "../enums.ts";

export interface JobOpeningFields {
  address: string;
  application_callback_url: string;
  created_time: string;
  description: string;
  errors: string[];
  external_company_facebook_url: string;
  external_company_full_address: string;
  external_company_id: string;
  external_company_name: string;
  external_id: string;
  id: string;
  job_status: JobOpeningJobStatus;
  latitude: number;
  longitude: number;
  offsite_application_url: string;
  page: PageFields;
  photo: PhotoFields;
  platform_review_status: JobOpeningPlatformReviewStatus;
  post: PostFields;
  remote_type: string;
  review_rejection_reasons: JobOpeningReviewRejectionReasons[];
  title: string;
  type: JobOpeningType;
}

export function jobOpeningNode(client: ApiClient, id: string) {
  return {
    __path: id,
    __brand: undefined as unknown as JobOpeningFields,
    get: <F extends (keyof JobOpeningFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<JobOpeningFields, F[number]>>(`${id}`, opts),
  };
}

