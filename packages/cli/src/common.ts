import { readFile } from "node:fs/promises";
import { basename } from "node:path";

export function requireValue(
  value: string | undefined,
  opts: { name: string; env: string },
): string {
  if (value) {
    return value;
  }
  throw new Error(`Missing ${opts.name}; pass --${kebab(opts.name)} or set ${opts.env}`);
}

export function optionalEnv(value: string | undefined, env: string): string | undefined {
  return value ?? process.env[env];
}

export async function readFileBlob(
  path: string,
  contentType = "application/octet-stream",
): Promise<Blob> {
  const bytes = await readFile(path);
  return new Blob([bytes], { type: contentType });
}

export async function readFileArrayBuffer(path: string): Promise<ArrayBuffer> {
  const bytes = await readFile(path);
  const arrayBuffer = new ArrayBuffer(bytes.byteLength);
  new Uint8Array(arrayBuffer).set(bytes);
  return arrayBuffer;
}

export function inferContentType(path: string, fallback = "application/octet-stream"): string {
  const name = basename(path).toLowerCase();
  if (name.endsWith(".jpg") || name.endsWith(".jpeg")) return "image/jpeg";
  if (name.endsWith(".png")) return "image/png";
  if (name.endsWith(".webp")) return "image/webp";
  if (name.endsWith(".gif")) return "image/gif";
  if (name.endsWith(".mp4")) return "video/mp4";
  if (name.endsWith(".mov")) return "video/quicktime";
  if (name.endsWith(".webm")) return "video/webm";
  return fallback;
}

function kebab(value: string): string {
  return value.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}
