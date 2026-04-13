import type { SurveyAnswer, SurveyDissatisfied, SurveySatisfied } from "../index.ts";

// Generated from google.ads.googleads.v23.services.ProvideLeadFeedbackRequest. Do not edit by hand.
export interface ProvideLeadFeedbackRequest {
  resourceName?: string;
  surveyAnswer?: SurveyAnswer;
  surveySatisfied?: SurveySatisfied;
  surveyDissatisfied?: SurveyDissatisfied;
}
