import type { LeadGenAppointmentSlotsByDayFields } from "./lead-gen-appointment-slots-by-day.ts";

export interface LeadGenAppointmentBookingInfoFields {
  advertiser_timezone_offset: string;
  appointment_durations: string[];
  appointment_slots_by_day: LeadGenAppointmentSlotsByDayFields[];
}

