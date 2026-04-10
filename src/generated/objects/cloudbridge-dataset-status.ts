export interface CloudbridgeDatasetStatusFields {
  app_redacted_event: string[];
  app_sensitive_params: Record<string, string[]>[];
  app_unverified_event: string[];
  has_app_associated: boolean;
  is_app_prohibited: boolean;
  is_dataset: boolean;
}

