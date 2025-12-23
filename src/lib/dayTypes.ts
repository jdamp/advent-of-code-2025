export type Day = `${number}${number}`;
export type Part = 1 | 2;

export type SolveFn = (input: string) => string | number | Promise<string | number>;
