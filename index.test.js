import { test } from "node:test";
import assert from "node:assert";
import { add } from "./index.js";

test("add() returns the sum of two numbers", () => {
  assert.strictEqual(add(2, 3), 5);
});