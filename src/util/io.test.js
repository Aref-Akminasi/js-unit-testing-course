import { it, expect, vi } from 'vitest';
import writeData from './io';
vi.mock('fs');
vi.mock('path', () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1];
      },
    },
  };
});

it('Should execute the writeFile method', () => {
  const testData = 'Test';
  const testFilename = `text.txt`;
  return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
});
