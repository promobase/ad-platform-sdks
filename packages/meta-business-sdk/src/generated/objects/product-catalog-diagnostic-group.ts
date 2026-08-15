// @generated
// fingerprint: sha256:7e5d22943fa685288870ced7d27afe22106a9df2b9615272345f38659c97ea7b
// DO NOT EDIT: generated file; changes will be overwritten.
import type { ProductCatalogDiagnosticGroupAffectedEntity, ProductCatalogDiagnosticGroupAffectedFeatures, ProductCatalogDiagnosticGroupSeverity, ProductCatalogDiagnosticGroupType } from "../enums.ts";

export interface ProductCatalogDiagnosticGroupFields {
  affected_channels: string[];
  affected_entity: ProductCatalogDiagnosticGroupAffectedEntity;
  affected_features: ProductCatalogDiagnosticGroupAffectedFeatures[];
  diagnostics: Record<string, unknown>[];
  error_code: number;
  number_of_affected_entities: number;
  number_of_affected_items: number;
  severity: ProductCatalogDiagnosticGroupSeverity;
  subtitle: string;
  title: string;
  type: ProductCatalogDiagnosticGroupType;
}

