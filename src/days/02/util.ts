export const sumInvalid = (input: string, re: RegExp): number => {
  const pairs = parseInput(input);

  let allInvalid: number[] = [];
  for (const pair of pairs) {
    allInvalid.push(...findInvalid(...pair, re));
  }
  const result = allInvalid.reduce((x, y) => x + y, 0);
  return result;
};

export const findInvalid = (
  lower: number,
  upper: number,
  re: RegExp
): number[] => {
  let invalid = [];
  for (let current = lower; current <= upper; current++) {
    if (re.test(current.toString())) {
      invalid.push(current);
    }
  }
  return invalid;
};

export const parseInput = (input: string): [number, number][] => {
  const pairs = input.split(",").map((part) => {
    const [low, high] = part.split("-").map(Number);
    return [low, high] as [number, number];
  });

  return pairs;
};
