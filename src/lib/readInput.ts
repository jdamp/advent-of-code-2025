import { readFile } from 'node:fs/promises';

export async function readInput(filePath: string): Promise<string> {
  return readFile(filePath, 'utf8');
}
