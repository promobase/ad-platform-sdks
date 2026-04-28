import { readFileSync, writeFileSync } from "node:fs";

const headersPath = new URL("../packages/x-sdk/src/generated/core/fetcher/Headers.ts", import.meta.url);
const source = readFileSync(headersPath, "utf8");

if (!source.includes("toJSON(): Record<string, string>")) {
  writeFileSync(
    headersPath,
    source.replace(
      `        getSetCookie(): string[] {
            return this.headers.get("set-cookie") || [];
        }
`,
      `        getSetCookie(): string[] {
            return this.headers.get("set-cookie") || [];
        }

        get count(): number {
            return this.headers.size;
        }

        getAll(name: string): string[] {
            return this.headers.get(name.toLowerCase()) || [];
        }

        toJSON(): Record<string, string> {
            const json: Record<string, string> = {};
            this.forEach((value, key) => {
                json[key] = value;
            });
            return json;
        }
`,
    ),
  );
}
