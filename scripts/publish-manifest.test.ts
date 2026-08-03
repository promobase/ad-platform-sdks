import { afterEach, describe, expect, test } from "bun:test";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

import {
  preparePackage,
  readWorkspaceVersions,
  restorePackage,
  workspaceSpecifierToRange,
} from "./publish-manifest.mjs";

const testDirs: string[] = [];

afterEach(() => {
  for (const packageDir of testDirs.splice(0)) {
    restorePackage(packageDir);
  }
});

describe("publish manifest", () => {
  test("converts workspace protocols to registry-safe ranges", () => {
    expect(workspaceSpecifierToRange("workspace:*", "1.2.3")).toBe("^1.2.3");
    expect(workspaceSpecifierToRange("workspace:^", "1.2.3")).toBe("^1.2.3");
    expect(workspaceSpecifierToRange("workspace:~", "1.2.3")).toBe("~1.2.3");
    expect(workspaceSpecifierToRange("workspace:^1.0.0", "1.2.3")).toBe("^1.0.0");
  });

  test("keeps the rewritten manifest active for the whole publish", () => {
    const { packageDir, original } = createFixture();
    testDirs.push(packageDir);

    preparePackage(packageDir, { forPublish: true });

    const prepared = JSON.parse(readFileSync(join(packageDir, "package.json"), "utf8"));
    expect(prepared.dependencies["@fixture/dependency"]).toBe("^1.2.3");
    expect(prepared.scripts.prepack).toBeUndefined();
    expect(prepared.scripts.postpack).toBeUndefined();
    expect(existsSync(join(packageDir, "package.json.prepack-backup"))).toBe(true);

    restorePackage(packageDir);
    expect(readFileSync(join(packageDir, "package.json"), "utf8")).toBe(original);
  });

  test("discovers package and private app workspace patterns", () => {
    const { root } = createFixture();
    const appDir = join(root, "apps", "docs");
    mkdirSync(appDir, { recursive: true });
    writeFileSync(
      join(root, "package.json"),
      `${JSON.stringify({ private: true, workspaces: ["apps/*", "packages/*"] }, null, 2)}\n`,
    );
    writeFileSync(
      join(appDir, "package.json"),
      `${JSON.stringify({ name: "@fixture/docs", version: "0.0.1", private: true }, null, 2)}\n`,
    );

    expect(Object.fromEntries(readWorkspaceVersions(root))).toEqual({
      "@fixture/docs": "0.0.1",
      "@fixture/dependency": "1.2.3",
      "@fixture/consumer": "1.0.0",
    });
  });
});

function createFixture() {
  const root = mkdtempSync(join(tmpdir(), "publish-manifest-test-"));
  const dependencyDir = join(root, "packages", "dependency");
  const packageDir = join(root, "packages", "consumer");
  mkdirSync(dependencyDir, { recursive: true });
  mkdirSync(packageDir, { recursive: true });
  writeFileSync(join(root, ".changeset"), "fixture");
  writeFileSync(
    join(root, "package.json"),
    `${JSON.stringify({ private: true, workspaces: ["packages/*"] }, null, 2)}\n`,
  );
  writeFileSync(
    join(dependencyDir, "package.json"),
    `${JSON.stringify({ name: "@fixture/dependency", version: "1.2.3" }, null, 2)}\n`,
  );
  const original = `${JSON.stringify(
    {
      name: "@fixture/consumer",
      version: "1.0.0",
      scripts: { prepack: "prepare", postpack: "restore", test: "test" },
      dependencies: { "@fixture/dependency": "workspace:*" },
    },
    null,
    2,
  )}\n`;
  writeFileSync(join(packageDir, "package.json"), original);
  return { root, packageDir, original };
}
