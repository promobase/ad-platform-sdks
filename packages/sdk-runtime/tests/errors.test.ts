import { test, expect } from "bun:test";
import { ApiError } from "../src/errors.ts";

test("ApiError has status and message", () => {
  const err = new ApiError("Bad request", 400);
  expect(err).toBeInstanceOf(Error);
  expect(err.message).toBe("Bad request");
  expect(err.status).toBe(400);
  expect(err.name).toBe("ApiError");
});
