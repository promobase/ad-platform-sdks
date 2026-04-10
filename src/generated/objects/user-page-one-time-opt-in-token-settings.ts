import type { ApiClient } from "../../runtime/client.ts";

export interface UserPageOneTimeOptInTokenSettingsFields {
  creation_timestamp: number;
  custom_audience_ids: string[];
  next_eligible_time: number;
  next_eligible_time_for_paid_messaging: number;
  notification_messages_frequency: string;
  notification_messages_reoptin: string;
  notification_messages_timezone: string;
  notification_messages_token: string;
  recipient_id: string;
  token_expiry_timestamp: number;
  topic_title: string;
  user_token_status: string;
}

export function userPageOneTimeOptInTokenSettingsNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof UserPageOneTimeOptInTokenSettingsFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<UserPageOneTimeOptInTokenSettingsFields, F[number]>>(`${id}`, opts),
  };
}

