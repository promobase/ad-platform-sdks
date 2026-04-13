export type Ref<T extends { resourceName?: string }> =
  | string
  | (T & { resourceName: string });

export function resolveRef<T extends { resourceName?: string }>(ref: Ref<T>): string {
  return typeof ref === "string" ? ref : ref.resourceName;
}
