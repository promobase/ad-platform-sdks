export interface ProductCatalogDiagnosticGroupFields {
  affected_channels: string[];
  affected_entity: string;
  affected_features: string[];
  diagnostics: Record<string, unknown>[];
  error_code: number;
  number_of_affected_entities: number;
  number_of_affected_items: number;
  severity: string;
  subtitle: string;
  title: string;
  type: string;
}

