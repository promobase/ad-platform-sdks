import type { ProfileFields } from "./profile.ts";

export interface AudioVisualReferenceMatchFields {
  audio_conflicting_segments: Record<string, unknown>[];
  audio_current_conflict_resolved_segments: Record<string, unknown>[];
  audio_segment_resolution_history: Record<string, unknown>[];
  conflict_status: string;
  conflict_type: string;
  conflicting_countries: string[];
  country_resolution_history: Record<string, Record<string, unknown>[]>[];
  creation_time: string;
  current_conflict_resolved_countries: Record<string, Record<string, unknown>>[];
  displayed_match_state: string;
  dispute_form_data_entries_with_translations: Record<string, unknown>[];
  expiration_time: string;
  id: string;
  is_disputable: boolean;
  match_state: string;
  matched_overlap_percentage: number;
  matched_owner_match_duration_in_sec: number;
  matched_reference_owner: ProfileFields;
  modification_history: Record<string, unknown>[];
  num_matches_on_matched_side: number;
  num_matches_on_ref_side: number;
  ref_owner_match_duration_in_sec: number;
  reference_overlap_percentage: number;
  reference_owner: ProfileFields;
  rejection_form_data_entries_with_translations: Record<string, unknown>[];
  resolution_details: string;
  resolution_reason: string;
  update_time: string;
  views_on_matched_side: number;
  visual_conflicting_segments: Record<string, unknown>[];
  visual_current_conflict_resolved_segments: Record<string, unknown>[];
  visual_segment_resolution_history: Record<string, unknown>[];
}

