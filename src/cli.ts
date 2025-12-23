import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import type { Part, SolveFn } from './lib/dayTypes.js';

type Args = {
  day?: string;
  part?: string;
  input?: string;
};

function parseArgs(argv: string[]): Args {
  const args: Args = {};
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (token === '--day') args.day = argv[++i];
    else if (token === '--part') args.part = argv[++i];
    else if (token === '--input') args.input = argv[++i];
  }
  return args;
}

function normalizeDay(day: string): string {
  const n = Number(day);
  if (!Number.isFinite(n) || n < 1 || n > 12) throw new Error(`Invalid --day: ${day}`);
  return String(n).padStart(2, '0');
}

function normalizePart(part: string): Part {
  if (part === '1') return 1;
  if (part === '2') return 2;
  throw new Error(`Invalid --part: ${part}`);
}

async function loadSolve(day: string, part: Part): Promise<SolveFn> {
  const modulePath = resolve(`src/days/${day}/part${part}.ts`);
  const mod = await import(pathToFileURL(modulePath).href);
  const solve = (mod.solve ?? mod.default) as unknown;
  if (typeof solve !== 'function') {
    throw new Error(`No export \"solve\" (or default) found in ${modulePath}`);
  }
  return solve as SolveFn;
}

async function main() {
  const { day, part, input } = parseArgs(process.argv.slice(2));
  if (!day || !part) {
    console.log('Usage: npm run solve -- --day 01 --part 1 [--input path]');
    process.exitCode = 1;
    return;
  }

  const normalizedDay = normalizeDay(day);
  const normalizedPart = normalizePart(part);
  const inputPath = resolve(input ?? `src/days/${normalizedDay}/input.txt`);

  const [solve, raw] = await Promise.all([
    loadSolve(normalizedDay, normalizedPart),
    readFile(inputPath, 'utf8')
  ]);

  const result = await solve(raw);
  process.stdout.write(String(result));
  process.stdout.write('\n');
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exitCode = 1;
});
