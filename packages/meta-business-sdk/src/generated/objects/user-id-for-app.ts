import type { ApplicationFields } from "./application.ts";

export interface UserIDForAppFields {
  app: ApplicationFields;
  id: string;
  instant_game_player_id: string;
}

