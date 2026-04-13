export type Ref<_T extends { resourceName?: string }> =
  | string
  | ({ resourceName: string } & { [key: string]: unknown });

export function resolveRef<T extends { resourceName?: string }>(ref: Ref<T>): string {
  return typeof ref === "string" ? ref : ref.resourceName;
}
