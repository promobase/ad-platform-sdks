export interface PreapprovalReviewFields {
  comp_type: string;
  crow_component_id: number;
  is_human_reviewed: boolean;
  is_reviewed: boolean;
  policy_info: Record<string, Record<string, unknown>>[];
}

