# Advent of Code 2025 (TypeScript)

## Install

```bash
npm install
```

## Run a solution

Run any day/part via the CLI:

```bash
npm run solve -- --day 01 --part 1
```

By default it reads `src/days/<day>/input.txt`. Override with:

```bash
npm run solve -- --day 01 --part 1 --input src/days/01/sample.txt
```

## Run tests

```bash
npm test
```

To run a single part's tests, use:

```bash
npm run test:day01:part1
```

Or run any test file directly:

```bash
npm test -- src/days/01/__tests__/part1.test.ts
```

To filter by test name, use:

```bash
npm run test:day -- "day01 part1"
```
