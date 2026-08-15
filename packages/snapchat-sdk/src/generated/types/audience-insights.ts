// @generated
// fingerprint: sha256:3c478a514f487839fef0638f62b11143ad61f75c552d51bb473f6b417e61e7ea
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for audience-insights — do not edit

export interface TargetingInsight {
  ad_account_id?: string;
}


export interface CreateTargetingInsightParams {
  adAccountId: string;
  base_spec: {
  interests: {
    category_id: unknown[];
  }[];
  geos: {
    country_code: string;
  }[];
};
  targeting_spec: {
  interests: {
    category_id: unknown[];
  }[];
  geos: {
    country_code: string;
  }[];
};
}
