export function parseRotations(lines: string[]): number[] {
  let moves = []
  for (const line of lines) {
    let sign = line[0] == "R" ? 1 : -1
    let steps = parseInt(line.slice(1, line.length))
    moves.push(sign*steps)
  }
  return moves
}