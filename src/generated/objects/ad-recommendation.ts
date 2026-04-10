import type { AdRecommendationDataFields } from "./ad-recommendation-data.ts";

export interface AdRecommendationFields {
  blame_field: string;
  code: number;
  confidence: string;
  importance: string;
  message: string;
  recommendation_data: AdRecommendationDataFields;
  title: string;
  value: string;
}

