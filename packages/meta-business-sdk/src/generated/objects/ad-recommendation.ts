// @generated
// fingerprint: sha256:34a69cc17db9f3a210786fa12fc24da1a2f2b3185c3d4c32248a335fee5b0228
// DO NOT EDIT: generated file; changes will be overwritten.
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

