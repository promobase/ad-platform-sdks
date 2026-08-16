import { expect, test } from "bun:test";

import {
  createFacebookCommentsAdapter,
  createInstagramAdapter,
  createMessengerAdapter,
  createTikTokCommentsAdapter,
} from "../src/index.ts";

test("umbrella re-exports the chat adapters for every platform", () => {
  expect(typeof createFacebookCommentsAdapter).toBe("function");
  expect(typeof createMessengerAdapter).toBe("function");
  expect(typeof createInstagramAdapter).toBe("function");
  expect(typeof createTikTokCommentsAdapter).toBe("function");
});
