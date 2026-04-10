export { ApiClient } from "./client.ts";
export type { ApiClientOptions, PaginatedResponse } from "./client.ts";
export { Cursor } from "./cursor.ts";
export { FacebookApiError } from "./errors.ts";
export type { EdgeMethod } from "./types.ts";

import { ApiClient } from "./client.ts";
import type { ApiClientOptions } from "./client.ts";

export function createClient(opts: ApiClientOptions): ApiClient {
  return new ApiClient(opts);
}
