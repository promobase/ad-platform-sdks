import type { FrequencyCapEventType, FrequencyCapLevel, FrequencyCapTimeUnit } from "../index.ts";

// Generated from google.ads.googleads.v23.common.FrequencyCapKey. Do not edit by hand.
export interface FrequencyCapKey {
  level?: FrequencyCapLevel;
  eventType?: FrequencyCapEventType;
  timeUnit?: FrequencyCapTimeUnit;
  timeLength?: number;
}
