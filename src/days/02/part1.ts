import { sumInvalid } from "./util";

export const rePart1 = /^(.+)\1$/;

export function solve(input: string): number {
  return sumInvalid(input, rePart1);
}
