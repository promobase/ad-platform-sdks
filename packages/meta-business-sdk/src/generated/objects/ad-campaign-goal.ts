export interface AdCampaignGoalFields {
  engaged_audiences_audience_label_exclusions: string[];
  engaged_audiences_audience_label_inclusions: string[];
  engaged_audiences_exclusions: string[];
  engaged_audiences_inclusions: string[];
  existing_customers_audience_label_exclusions: string[];
  existing_customers_audience_label_inclusions: string[];
  existing_customers_exclusions: string[];
  existing_customers_inclusions: string[];
  is_ca_expansion_enabled: boolean;
  is_lookalike_inclusion_enabled: boolean;
  lookalike_inclusions: string[];
  type: number;
}
