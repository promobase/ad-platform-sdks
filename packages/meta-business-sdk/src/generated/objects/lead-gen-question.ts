// @generated
// fingerprint: sha256:c86e0193c4d745a95b2ead9ccfefcc140e081f9961e6260f7e37838244446052
// DO NOT EDIT: generated file; changes will be overwritten.
import type { LeadGenConditionalQuestionsGroupChoicesFields } from "./lead-gen-conditional-questions-group-choices.ts";
import type { LeadGenConditionalQuestionsGroupQuestionsFields } from "./lead-gen-conditional-questions-group-questions.ts";
import type { LeadGenQuestionOptionFields } from "./lead-gen-question-option.ts";

export interface LeadGenQuestionFields {
  conditional_questions_choices: LeadGenConditionalQuestionsGroupChoicesFields[];
  conditional_questions_group_id: string;
  dependent_conditional_questions: LeadGenConditionalQuestionsGroupQuestionsFields[];
  id: string;
  inline_context: string;
  key: string;
  label: string;
  options: LeadGenQuestionOptionFields[];
  type: string;
}

