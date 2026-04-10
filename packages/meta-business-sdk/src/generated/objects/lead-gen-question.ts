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

