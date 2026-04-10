import type { IDNameFields } from "./id-name.ts";

export interface FlexibleTargetingFields {
  behaviors: IDNameFields[];
  college_years: number[];
  connections: IDNameFields[];
  custom_audiences: IDNameFields[];
  education_majors: IDNameFields[];
  education_schools: IDNameFields[];
  education_statuses: number[];
  ethnic_affinity: IDNameFields[];
  family_statuses: IDNameFields[];
  friends_of_connections: IDNameFields[];
  generation: IDNameFields[];
  home_ownership: IDNameFields[];
  home_type: IDNameFields[];
  home_value: IDNameFields[];
  household_composition: IDNameFields[];
  income: IDNameFields[];
  industries: IDNameFields[];
  interested_in: number[];
  interests: IDNameFields[];
  life_events: IDNameFields[];
  moms: IDNameFields[];
  net_worth: IDNameFields[];
  office_type: IDNameFields[];
  politics: IDNameFields[];
  relationship_statuses: number[];
  user_adclusters: IDNameFields[];
  work_employers: IDNameFields[];
  work_positions: IDNameFields[];
}

