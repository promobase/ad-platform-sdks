import type { SurveyAnswer, SurveyDissatisfied, SurveySatisfied } from "../index.ts";

// Generated from google.ads.googleads.v25.services.ProvideLeadFeedbackRequest. Do not edit by hand.
export interface ProvideLeadFeedbackRequest {
  resourceName?: string;
  surveyAnswer?: SurveyAnswer;
  surveySatisfied?: SurveySatisfied;
  surveyDissatisfied?: SurveyDissatisfied;
}
