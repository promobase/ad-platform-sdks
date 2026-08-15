// @generated
// fingerprint: sha256:cf9031294e4536782c0e05efae5f74b70d8d42a180d5dd122b9e2d78e39dbb7a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { AdAccountBusinessConstraintsStatus } from "../enums.ts";

export interface AdAccountBusinessConstraintsFields {
  audience_controls: Record<string, unknown>;
  campaigns_with_error: string[];
  is_age_restriction_enabled: boolean;
  placement_controls: Record<string, unknown>;
  placement_controls_per_objective: Record<string, unknown>;
  status: AdAccountBusinessConstraintsStatus;
}

