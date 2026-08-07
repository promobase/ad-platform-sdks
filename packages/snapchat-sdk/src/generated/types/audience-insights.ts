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
