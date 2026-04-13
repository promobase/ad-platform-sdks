import type { DayOfWeek, MinuteOfHour } from "../index.ts";

// Generated from google.ads.googleads.v23.common.AdScheduleInfo. Do not edit by hand.
export interface AdScheduleInfo {
  startMinute?: MinuteOfHour;
  endMinute?: MinuteOfHour;
  startHour?: number;
  endHour?: number;
  dayOfWeek?: DayOfWeek;
}
