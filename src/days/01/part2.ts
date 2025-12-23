import { parseRotations } from "./util";

export function solve(input: string): number {
  let result = 0;

  const lines = input.split("\n");
  const maxDial = 100;
  let dialPos = 50;

  const moves = parseRotations(lines);

  for (const move of moves) {
    const prevPos = dialPos;
    dialPos = dialPos + move;
    // Check whether current and prevPos are in different hundreds
    result += Math.abs(zeroHits(prevPos, dialPos));
  }

  return result;
}

function zeroHits(prev: number, curr: number, m = 100): number {
  if (curr > prev) return Math.floor(curr / m) - Math.floor(prev / m);
  if (curr < prev) return Math.ceil(curr / m) - Math.ceil(prev / m);
  return 0;
}
