import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import { solve } from '../part1';


describe('day01 part1', () => {
  it('counts how often dial is on 0', async () => {
    const input = await readFile(new URL('../sample.txt', import.meta.url), 'utf8');
     expect(solve(input)).toBe(3);
  });
});
