// @generated
// fingerprint: sha256:f10b913193da3f8bb512ff8cda92d6ba7419907cd1795b2d812efa1837d1588c
// DO NOT EDIT: generated file; changes will be overwritten.
import type { UserFields } from "./user.ts";

export interface RecommendationFields {
  created_time: string;
  has_rating: boolean;
  has_review: boolean;
  open_graph_story: Record<string, unknown>;
  rating: number;
  recommendation_type: string;
  review_text: string;
  reviewer: UserFields;
}

