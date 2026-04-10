export interface OrderIDAttributionsFields {
  app_id: string;
  attribution_type: string;
  attributions: Record<string, unknown>[];
  conversion_device: string;
  dataset_id: string;
  holdout_status: Record<string, unknown>[];
  order_id: string;
  order_timestamp: string;
  pixel_id: string;
}

