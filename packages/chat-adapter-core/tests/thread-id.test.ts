import { expect, test } from "bun:test";

import {
  commentMessageState,
  commentThreadId,
  decodeCommentThreadId,
  decodeDmThreadId,
  dmThreadId,
} from "../src/index.ts";

test("messenger DM thread id round trips", () => {
  const id = dmThreadId({ platform: "messenger", accountId: "", userId: "psid_1001" });
  expect(id).toBe("messenger:psid_1001");
  expect(decodeDmThreadId(id)).toEqual({
    platform: "messenger",
    accountId: "",
    userId: "psid_1001",
  });
});

test("instagram DM thread id round trips", () => {
  const id = dmThreadId({
    platform: "instagram",
    accountId: "17841400000000000",
    userId: "1234567890",
  });
  expect(id).toBe("instagram:17841400000000000:1234567890");
  expect(decodeDmThreadId(id)).toEqual({
    platform: "instagram",
    accountId: "17841400000000000",
    userId: "1234567890",
  });
});

test("comment thread id round trips", () => {
  const id = commentThreadId({
    platform: "instagram",
    accountId: "17841400000000000",
    parentCommentId: "17896500000000000",
  });
  expect(id).toBe("instagram:17841400000000000:comment:17896500000000000");
  expect(decodeCommentThreadId(id)).toEqual({
    platform: "instagram",
    accountId: "17841400000000000",
    parentCommentId: "17896500000000000",
  });
});

test("comment thread id rejects malformed ids", () => {
  expect(() => decodeCommentThreadId("instagram:abc")).toThrow();
  expect(() => decodeCommentThreadId("tiktok:1:comment:2:extra")).toThrow();
});

test("comment verbs map to message state", () => {
  expect(commentMessageState("add")).toEqual({ deleted: false, edited: false });
  expect(commentMessageState("remove")).toEqual({ deleted: true, edited: false });
  expect(commentMessageState("delete")).toEqual({ deleted: true, edited: false });
  expect(commentMessageState("hide")).toEqual({ deleted: true, edited: false });
  expect(commentMessageState("edit")).toEqual({ deleted: false, edited: true });
  expect(commentMessageState("restore")).toEqual({ deleted: false, edited: false });
});
