import { z } from "zod";

export const stringArray = z.preprocess((value) => {
  if (value === undefined || value === "") return undefined;
  if (Array.isArray(value)) return value;
  if (typeof value === "string")
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  return value;
}, z.array(z.string()));

export const optionalStringArray = stringArray.optional();

export const numberFromCli = z.preprocess((value) => {
  if (value === undefined || value === "") return undefined;
  if (typeof value === "number") return value;
  if (typeof value === "string") return Number(value);
  return value;
}, z.number());

export const optionalNumberFromCli = numberFromCli.optional();

export const booleanFromCli = z.preprocess((value) => {
  if (value === undefined || value === "") return undefined;
  if (typeof value === "boolean") return value;
  if (typeof value === "string") {
    if (["1", "true", "yes", "y"].includes(value.toLowerCase())) return true;
    if (["0", "false", "no", "n"].includes(value.toLowerCase())) return false;
  }
  return value;
}, z.boolean());

export const optionalBooleanFromCli = booleanFromCli.optional();

export function jsonFromCli<TSchema extends z.ZodTypeAny>(schema: TSchema) {
  return z.preprocess((value) => {
    if (value === undefined || value === "") return undefined;
    if (typeof value !== "string") return value;
    return JSON.parse(value) as unknown;
  }, schema);
}

export const jsonObjectFromCli = jsonFromCli(z.record(z.string(), z.unknown()));
export const optionalJsonObjectFromCli = jsonObjectFromCli.optional();
export const jsonArrayFromCli = jsonFromCli(z.array(z.unknown()));

export const graphAuth = z.object({
  accessToken: z.string().optional(),
  apiVersion: z.string().optional(),
});

export const polling = z.object({
  photoIntervalMs: optionalNumberFromCli,
  videoIntervalMs: optionalNumberFromCli,
  textIntervalMs: optionalNumberFromCli,
  maxAttempts: optionalNumberFromCli,
});

export const fieldsLimit = z.object({
  fields: optionalStringArray,
  limit: optionalNumberFromCli,
});

export const oauthConfig = z.object({
  appId: z.string().optional(),
  appSecret: z.string().optional(),
  redirectUri: z.string().url().optional(),
});

export type GraphAuthInput = z.output<typeof graphAuth>;
export type OAuthConfigInput = z.output<typeof oauthConfig>;
