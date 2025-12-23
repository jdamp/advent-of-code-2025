import { parseRotations } from "./util";

export function solve(input: string): number {  
  let result = 0;

  const lines = input.split('\n');
  const maxDial = 100;
  let dialPos = 50;
  
  const moves = parseRotations(lines);

  for (const move of moves) {
    dialPos = mod(dialPos + move, maxDial);
    if (dialPos === 0) {
      result += 1;
    }
  }
  return result;
}

const mod = (n: number, m: number) => ((n % m) + m) % m;

