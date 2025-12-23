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

function parseRotations(lines: string[]): number[] {
  let moves = []
  for (const line of lines) {
    let sign = line[0] == "R" ? 1 : -1
    let steps = parseInt(line.slice(1, line.length))
    moves.push(sign*steps)
  }
  return moves
}