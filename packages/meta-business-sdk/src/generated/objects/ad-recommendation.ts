import type { AdRecommendationDataFields } from "./ad-recommendation-data.ts";
import type { AdRecommendationConfidence, AdRecommendationImportance } from "../enums.ts";

export interface AdRecommendationFields {
  blame_field: string;
  code: number;
  confidence: AdRecommendationConfidence;
  importance: AdRecommendationImportance;
  message: string;
  recommendation_data: AdRecommendationDataFields;
  title: string;
  value: string;
}

