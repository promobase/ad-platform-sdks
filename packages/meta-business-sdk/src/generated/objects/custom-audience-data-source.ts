import type { CustomAudienceDataSourceSubType, CustomAudienceDataSourceType } from "../enums.ts";

export interface CustomAudienceDataSourceFields {
  creation_params: string;
  sub_type: CustomAudienceDataSourceSubType;
  type: CustomAudienceDataSourceType;
}

