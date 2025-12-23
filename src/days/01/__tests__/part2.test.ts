import { describe, expect, it } from 'vitest';
import { solve } from '../part2';

describe('day01 part2', () => {
  it('multiplies numbers in sample', () => {
    const input = '1\n2\n3\n';
    expect(solve(input)).toBe(6);
  });
});
