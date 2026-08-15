import type { createClient } from "../generated/index.ts";

export type GraphClient = ReturnType<typeof createClient>;
