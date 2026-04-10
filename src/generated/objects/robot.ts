import type { ApiClient } from "../../runtime/client.ts";
import type { UserFields } from "./user.ts";

export interface RobotFields {
  bringup_vars: Record<string, string>[];
  configurations: Record<string, string>[];
  data_center: string;
  id: string;
  init_pos: Record<string, number>[];
  last_pos: Record<string, number>[];
  meetup_link_hash: string;
  robot_notes: string;
  suite: string;
  target_map_image_uri: string;
  target_os_image_uri: string;
  target_sw_image_uri: string;
  user: UserFields;
}

export function robotNode(client: ApiClient, id: string) {
  return {
    get: <F extends (keyof RobotFields)[]>(opts: { fields: F; params?: Record<string, unknown> }) =>
      client.get<Pick<RobotFields, F[number]>>(`${id}`, opts),
  };
}

