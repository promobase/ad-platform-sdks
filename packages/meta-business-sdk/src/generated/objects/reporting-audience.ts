import type { CustomAudienceFields } from "./custom-audience.ts";
import type { RawCustomAudienceFields } from "./raw-custom-audience.ts";

export interface ReportingAudienceFields {
  custom_audiences: RawCustomAudienceFields[];
  custom_audiences_url_param_name: string;
  custom_audiences_url_param_type: string;
}

