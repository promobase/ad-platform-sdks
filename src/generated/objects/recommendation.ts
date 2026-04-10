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

