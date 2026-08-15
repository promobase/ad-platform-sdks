// @generated
// fingerprint: sha256:87b108859e593c9cf16c9a40972cb0cfcaa2e340a006620bd2ddd485e5bfe56a
// DO NOT EDIT: generated file; changes will be overwritten.
import type { LeadGenConditionalQuestionsGroupChoicesFields } from "./lead-gen-conditional-questions-group-choices.ts";
import type { LeadGenConditionalQuestionsGroupQuestionsFields } from "./lead-gen-conditional-questions-group-questions.ts";
import type { LeadGenQuestionOptionFields } from "./lead-gen-question-option.ts";

export interface LeadGenDraftQuestionFields {
  conditional_questions_choices: LeadGenConditionalQuestionsGroupChoicesFields[];
  conditional_questions_group_id: string;
  dependent_conditional_questions: LeadGenConditionalQuestionsGroupQuestionsFields[];
  inline_context: string;
  key: string;
  label: string;
  options: LeadGenQuestionOptionFields[];
  type: string;
}

