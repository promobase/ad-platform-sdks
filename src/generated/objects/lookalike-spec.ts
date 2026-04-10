export interface LookalikeSpecFields {
  country: string;
  is_created_by_recommended_dfca: boolean;
  is_financial_service: boolean;
  is_parent_lal: boolean;
  origin: Record<string, unknown>[];
  origin_event_name: string;
  origin_event_source_name: string;
  origin_event_source_type: string;
  product_set_name: string;
  ratio: number;
  starting_ratio: number;
  target_countries: string[];
  target_country_names: unknown[];
  type: string;
}

