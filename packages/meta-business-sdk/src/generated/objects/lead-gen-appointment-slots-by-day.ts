import type { LeadGenAppointmentTimeSlotFields } from "./lead-gen-appointment-time-slot.ts";

export interface LeadGenAppointmentSlotsByDayFields {
  appointment_slots: LeadGenAppointmentTimeSlotFields[];
  day: string;
}

