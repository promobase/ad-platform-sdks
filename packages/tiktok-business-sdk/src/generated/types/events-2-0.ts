// @generated
// fingerprint: sha256:1184d5363b83e262387e2f4601643eebf3e7c2df01ef70a3ae0e334eff0d79c9
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for Events 2.0 — do not edit

export interface EventTrackParams {
  event_source: string;
  event_source_id: string;
  data: {
  event: string;
  event_time: number;
  event_id?: string;
  user?: Record<string, unknown>;
  properties?: Record<string, unknown>;
  page?: Record<string, unknown>;
  app?: Record<string, unknown>;
  ad?: Record<string, unknown>;
  limited_data_use?: boolean;
  lead?: Record<string, unknown>;
}[];
}


export interface EventTrackResponse {}
