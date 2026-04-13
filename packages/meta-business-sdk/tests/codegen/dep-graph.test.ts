import { expect, test } from "bun:test";
import { buildDepGraph, type DepGraph, findCycles } from "../../src/codegen/dep-graph.ts";

// Minimal Spec type for testing
interface Spec {
  name: string;
  fields: { name: string; type: string }[];
  apis: {
    method: string;
    endpoint?: string;
    return: string;
    params: { name: string; type: string; required: boolean }[];
  }[];
}

function makeSpec(name: string, fieldTypes: string[], apiReturnTypes: string[]): Spec {
  return {
    name,
    fields: fieldTypes.map((t, i) => ({ name: `field_${i}`, type: t })),
    apis: apiReturnTypes.map((r, i) => ({
      method: "GET",
      endpoint: `edge_${i}`,
      return: r,
      params: [],
    })),
  };
}

test("buildDepGraph identifies object references from fields and api returns", () => {
  const specs = new Map<string, Spec>([
    ["Campaign", makeSpec("Campaign", ["string", "AdSet"], ["Ad"])],
    ["AdSet", makeSpec("AdSet", ["string"], ["Campaign"])],
    ["Ad", makeSpec("Ad", ["string"], [])],
  ]) as Map<string, any>;
  const graph = buildDepGraph(specs);
  expect(graph.get("Campaign")!.has("AdSet")).toBe(true);
  expect(graph.get("Campaign")!.has("Ad")).toBe(true);
  expect(graph.get("AdSet")!.has("Campaign")).toBe(true);
  expect(graph.get("Ad")!.size).toBe(0);
});

test("buildDepGraph tracks dependencies through list<X> types", () => {
  const specs = new Map<string, Spec>([
    ["Campaign", makeSpec("Campaign", ["list<AdLabel>"], [])],
    ["AdLabel", makeSpec("AdLabel", [], [])],
  ]) as Map<string, any>;
  const graph = buildDepGraph(specs);
  expect(graph.get("Campaign")!.has("AdLabel")).toBe(true);
});

test("findCycles detects circular dependencies", () => {
  const graph: DepGraph = new Map([
    ["A", new Set(["B"])],
    ["B", new Set(["C"])],
    ["C", new Set(["A"])],
    ["D", new Set(["E"])],
    ["E", new Set()],
  ]);
  const cycles = findCycles(graph);
  expect(cycles.has("A")).toBe(true);
  expect(cycles.has("B")).toBe(true);
  expect(cycles.has("C")).toBe(true);
  expect(cycles.has("D")).toBe(false);
  expect(cycles.has("E")).toBe(false);
});

test("findCycles returns empty set when no cycles", () => {
  const graph: DepGraph = new Map([
    ["A", new Set(["B"])],
    ["B", new Set(["C"])],
    ["C", new Set()],
  ]);
  const cycles = findCycles(graph);
  expect(cycles.size).toBe(0);
});
