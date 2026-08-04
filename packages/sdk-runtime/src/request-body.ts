type NativeRequestBody = Exclude<RequestInit["body"], null | undefined>;

export function isNativeRequestBody(value: unknown): value is NativeRequestBody {
  return (
    typeof value === "string" ||
    value instanceof ArrayBuffer ||
    ArrayBuffer.isView(value) ||
    (typeof Blob !== "undefined" && value instanceof Blob) ||
    (typeof FormData !== "undefined" && value instanceof FormData) ||
    (typeof URLSearchParams !== "undefined" && value instanceof URLSearchParams) ||
    (typeof ReadableStream !== "undefined" && value instanceof ReadableStream)
  );
}

export function serializeRequestBody(
  body: unknown,
  headers: Readonly<Record<string, string>> = {},
): NativeRequestBody | undefined {
  if (body === undefined) return undefined;
  const contentType = Object.entries(headers).find(
    ([name]) => name.toLowerCase() === "content-type",
  )?.[1];
  if (contentType?.toLowerCase().includes("json")) return JSON.stringify(body);
  return isNativeRequestBody(body) ? body : JSON.stringify(body);
}
