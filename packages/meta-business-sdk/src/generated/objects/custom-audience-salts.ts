export interface CustomAudienceSaltsFields {
  app_id: number;
  public_key: string;
  salts: Record<string, unknown>[];
  user_id: number;
}

