import * as v from "valibot";

export type LegacySchemaResult<T> =
  | { readonly success: true; readonly data: T }
  | { readonly success: false; readonly error: unknown };

/**
 * Preserve the old parse/safeParse shape for the generated/root compatibility
 * surface while keeping Valibot as the canonical schema implementation.
 */
export function createLegacySchema<
  const TSchema extends v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>,
>(schema: TSchema) {
  return {
    parse(input: unknown): v.InferOutput<TSchema> {
      return v.parse(schema, input);
    },
    safeParse(input: unknown): LegacySchemaResult<v.InferOutput<TSchema>> {
      const result = v.safeParse(schema, input);
      return result.success
        ? { success: true, data: result.output }
        : { success: false, error: new v.ValiError(result.issues) };
    },
  } as const;
}
