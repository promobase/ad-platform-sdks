import { parseGenericType } from "./type-resolver.ts";

export type DepGraph = Map<string, Set<string>>;

interface SpecField {
  name: string;
  type: string;
}

interface SpecApi {
  method: string;
  endpoint?: string;
  return: string;
  params: { name: string; type: string; required: boolean }[];
}

interface Spec {
  name: string;
  fields: SpecField[];
  apis: SpecApi[];
}

/**
 * Recursively extracts all object-name references from a type string.
 * Known primitive/container type names are excluded; only names that exist
 * in the `knownNames` set are collected.
 */
function extractRefs(typeStr: string, knownNames: Set<string>, refs: Set<string>): void {
  const trimmed = typeStr.trim();

  const parsed = parseGenericType(trimmed);
  if (parsed !== null) {
    // Recurse into each inner type argument (skip the outer container name itself)
    for (const inner of parsed.inner) {
      extractRefs(inner, knownNames, refs);
    }
    return;
  }

  // Plain type name — collect if it's a known spec object
  if (knownNames.has(trimmed)) {
    refs.add(trimmed);
  }
}

/**
 * Builds a dependency graph from a map of spec objects.
 * Each node in the graph lists the other spec objects it directly references
 * (via field types or API return types). Self-references are excluded.
 */
export function buildDepGraph(specs: Map<string, Spec>): DepGraph {
  const knownNames = new Set(specs.keys());
  const graph: DepGraph = new Map();

  for (const [name, spec] of specs) {
    const deps = new Set<string>();

    for (const field of spec.fields) {
      extractRefs(field.type, knownNames, deps);
    }

    for (const api of spec.apis) {
      extractRefs(api.return, knownNames, deps);
    }

    // Remove self-reference
    deps.delete(name);

    graph.set(name, deps);
  }

  return graph;
}

/**
 * Finds all nodes that participate in a cycle using Tarjan's SCC algorithm.
 * Returns a set of node names that belong to strongly connected components
 * with more than one node (i.e., are part of a cycle).
 */
export function findCycles(graph: DepGraph): Set<string> {
  const index: Map<string, number> = new Map();
  const lowlink: Map<string, number> = new Map();
  const onStack: Map<string, boolean> = new Map();
  const stack: string[] = [];
  const cycleNodes: Set<string> = new Set();
  let counter = 0;

  function strongConnect(node: string): void {
    index.set(node, counter);
    lowlink.set(node, counter);
    counter++;
    stack.push(node);
    onStack.set(node, true);

    const neighbours = graph.get(node) ?? new Set<string>();
    for (const neighbour of neighbours) {
      if (!index.has(neighbour)) {
        // Neighbour not yet visited — recurse
        strongConnect(neighbour);
        lowlink.set(node, Math.min(lowlink.get(node)!, lowlink.get(neighbour)!));
      } else if (onStack.get(neighbour)) {
        // Neighbour is on the stack — it's in the current SCC
        lowlink.set(node, Math.min(lowlink.get(node)!, index.get(neighbour)!));
      }
    }

    // If node is a root of an SCC, pop the stack to collect the component
    if (lowlink.get(node) === index.get(node)) {
      const scc: string[] = [];
      let w: string;
      do {
        w = stack.pop()!;
        onStack.set(w, false);
        scc.push(w);
      } while (w !== node);

      // Only mark as cyclic if the SCC has more than one node
      if (scc.length > 1) {
        for (const n of scc) {
          cycleNodes.add(n);
        }
      }
    }
  }

  for (const node of graph.keys()) {
    if (!index.has(node)) {
      strongConnect(node);
    }
  }

  return cycleNodes;
}
