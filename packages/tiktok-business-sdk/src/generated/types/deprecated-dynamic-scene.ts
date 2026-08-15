// @generated
// fingerprint: sha256:01a36e49bd938259b2e730d66e9f61fbc20fa96c336b092bb96b953eef921a89
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated types for (Deprecated) Dynamic Scene — do not edit

export interface DynamicSceneMaterialSubmitParams {
  advertiser_id: string;
  slots: {
  order: number;
  tag: string;
  video_ids: string[];
  mute?: boolean;
  bgm_volume?: number;
}[];
  auto_soundtrack?: boolean;
  music_ids?: string[];
}


export interface DynamicSceneMaterialSubmitResponse {
  material_package_id?: string;
}


export interface DynamicSceneTaskCreateParams {
  advertiser_id: string;
  material_package_id: string;
}


export interface DynamicSceneTaskCreateResponse {
  task_id?: string;
}


export interface DynamicSceneTaskGetParams {
  advertiser_id: string;
  task_id?: string;
}


export interface DynamicSceneTaskGetResponse {
  status?: "PROCESSING" | "FAIL" | "SUCCESS";
  error_msg?: string;
  material_package_id?: string;
  available_quota?: number;
  videos?: {
  music_id?: string;
  music_name?: string;
  music_preview_url?: string;
  width?: number;
  height?: number;
  duration?: number;
  story_arc?: string[];
  video_id?: string;
  video_preview_url?: string;
  slots?: {
  order?: number;
  tag?: string;
  video_ids?: string[];
  mute?: boolean;
  bgm_volume?: number;
}[];
}[];
}


export interface DynamicSceneGetParams {
  advertiser_id: string;
  material_package_id: string;
  page?: number;
  page_size?: number;
}


export interface DynamicSceneGetResponse {
  list?: {
  video_id?: string;
  video_preview_url?: string;
  music_id?: string;
  music_name?: string;
  music_preview_url?: string;
  width?: number;
  height?: number;
  duration?: number;
  story_arc?: string[];
  slots?: {
  order?: number;
  tag?: string;
  video_ids?: string[];
  mute?: boolean;
  bgm_volume?: number;
}[];
}[];
  page_info?: {
  page?: number;
  page_size?: number;
  total_number?: number;
  total_page?: number;
};
}


export interface DynamicSceneReportGetParams {
  advertiser_id: string;
  data_level: string;
  input_ids: string[];
  dimensions: string[];
  metrics?: string[];
  start_time?: string;
  end_time?: string;
  order_field?: string;
  order_type?: "ASC" | "DESC";
  filters?: {
  field_name?: string;
  filter_type?: string;
  filter_value?: string;
}[];
  page?: number;
  page_size?: number;
}


export interface DynamicSceneReportGetResponse {
  code?: number;
  message?: string;
  list?: {
  dimension?: {
  advertiser_id?: string;
  adgroup_id?: string;
  story_arc?: string;
  order?: number;
  video_id?: string;
};
  metric?: {
  clicks?: number;
  complete_plays?: number;
  break_plays?: number;
  ctr?: number;
  complete_play_rate?: number;
  break_play_rate?: number;
};
}[];
  request_id?: string;
}
