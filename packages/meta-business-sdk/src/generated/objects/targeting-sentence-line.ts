import type { TargetingFields } from "./targeting.ts";

export interface TargetingSentenceLineFields {
  id: string;
  params: TargetingFields;
  targetingsentencelines: unknown[];
}

