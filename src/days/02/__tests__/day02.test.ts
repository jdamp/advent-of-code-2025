import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { rePart1 } from "../part1";
import { rePart2 } from "../part2";
import { findInvalid, sumInvalid } from "../util";

describe("Count invalid ids in range", () => {
  it("11-22 has two invalid IDs, 11 and 22.", () => {
    expect(findInvalid(11, 22, rePart1)).toEqual([11, 22]);
  });

  it("95-115 has one invalid ID, 99.", () => {
    expect(findInvalid(95, 115, rePart1)).toEqual([99]);
  });

  it("998-1012 has one invalid ID, 1010.", () => {
    expect(findInvalid(998, 1012, rePart1)).toEqual([1010]);
  });

  it("1188511880-1188511890 has one invalid ID, 1188511885.", () => {
    expect(findInvalid(1188511880, 1188511890, rePart1)).toEqual([1188511885]);
  });

  it("222220-222224 has one invalid ID, 222222.", () => {
    expect(findInvalid(222220, 222224, rePart1)).toEqual([222222]);
  });

  it("1698522-1698528 contains no invalid IDs.", () => {
    expect(findInvalid(1698522, 1698528, rePart1)).toEqual([]);
  });

  it("446443-446449 has one invalid ID, 446446.", () => {
    expect(findInvalid(446443, 446449, rePart1)).toEqual([446446]);
  });

  it("38593856-38593862 has one invalid ID, 38593859.", () => {
    expect(findInvalid(38593856, 38593862, rePart1)).toEqual([38593859]);
  });
});

describe("Part 1 test case passes", () => {
  it("bla", async () => {
    const input = await readFile(
      new URL("../sample.txt", import.meta.url),
      "utf8"
    );
    expect(sumInvalid(input, rePart1)).toBe(1227775554);
  });
});

describe("Part 2 test case passes", () => {
  it("bla", async () => {
    const input = await readFile(
      new URL("../sample.txt", import.meta.url),
      "utf8"
    );
    expect(sumInvalid(input, rePart2)).toBe(4174379265);
  });
});
