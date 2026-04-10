export interface CheckBatchRequestStatusFields {
  errors: Record<string, unknown>[];
  errors_total_count: number;
  handle: string;
  ids_of_invalid_requests: string[];
  status: string;
  warnings: Record<string, unknown>[];
  warnings_total_count: number;
}

