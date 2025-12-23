import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { solve } from "../part2";

describe("custom tests", () => {
  it.each([
    {
      name: "counts multiple boundary crossings",
      input: "R1000",
      expected: 10,
    },
    {
      name: "Move left exactly to zero",
      input: "L50",
      expected: 1,
    },
    {
      name: "Move left over zero",
      input: "L51",
      expected: 1,
    },
    {
      name: "Move left by 150 and land on zero",
      input: "L150",
      expected: 2,
    },
    {
      name: "Move right exactly to zero",
      input: "R50",
      expected: 1,
    },
    {
      name: "Move right by 150 and land on zero",
      input: "L150",
      expected: 2,
    },
  ])("$name", ({ input, expected }) => {
    expect(solve(input)).toBe(expected);
  });
});

describe("day01 part2", () => {
  it("Correct solution for sample", async () => {
    const input = await readFile(
      new URL("../sample.txt", import.meta.url),
      "utf8"
    );
    expect(solve(input)).toBe(6);
  });
});
