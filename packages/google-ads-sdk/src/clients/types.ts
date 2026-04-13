/**
 * A reference to a Google Ads resource. Accepts either a raw `resourceName`
 * string (e.g. `"customers/123/campaigns/456"`) or a rich resource object
 * with a required `resourceName` field (typically the return value of a
 * wrapper `create(...)` call).
 *
 * Note: because Google Ads resource interfaces have all-optional fields,
 * TypeScript's structural typing treats `Ref<Campaign>` and
 * `Ref<CampaignBudget>` as interchangeable at the type level. The wrappers
 * rely on the CALL SITE (e.g. `adGroups.create({ campaign: ... })`) to keep
 * the caller honest; a mistakenly passed budget-as-campaign will fail at
 * runtime with a Google Ads API error, not at compile time.
 */
export type Ref<T extends { resourceName?: string }> = string | (T & { resourceName: string });

export function resolveRef<T extends { resourceName?: string }>(ref: Ref<T>): string {
  return typeof ref === "string" ? ref : ref.resourceName;
}
