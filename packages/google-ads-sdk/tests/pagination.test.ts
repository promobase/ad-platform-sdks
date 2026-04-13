import { test, expect } from "bun:test";
import { paginate } from "../src/pagination.ts";

type Row = { id: string };
type Res = { results?: Row[]; nextPageToken?: string };

test("paginate yields all rows across pages", async () => {
  const pages: Res[] = [
    { results: [{ id: "1" }, { id: "2" }], nextPageToken: "p2" },
    { results: [{ id: "3" }], nextPageToken: "p3" },
    { results: [{ id: "4" }] },
  ];
  let i = 0;
  const fetchPage = async (_req: { query: string; pageToken?: string }): Promise<Res> => pages[i++]!;
  const out: Row[] = [];
  for await (const row of paginate(fetchPage, { query: "SELECT x" })) out.push(row);
  expect(out.map((r) => r.id)).toEqual(["1", "2", "3", "4"]);
});

test("paginate stops when no nextPageToken", async () => {
  const fetchPage = async () => ({ results: [{ id: "only" }] });
  const rows: Row[] = [];
  for await (const row of paginate(fetchPage, { query: "SELECT x" })) rows.push(row);
  expect(rows).toHaveLength(1);
});

test("paginate handles empty results", async () => {
  const fetchPage = async (): Promise<Res> => ({});
  const rows: Row[] = [];
  for await (const row of paginate(fetchPage, { query: "SELECT x" })) rows.push(row);
  expect(rows).toHaveLength(0);
});
