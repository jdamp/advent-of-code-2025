import { sumInvalid } from "./util";

export const rePart2 = /^(.+)\1+$/;

export function solve(input: string): number {
  return sumInvalid(input, rePart2);
}
