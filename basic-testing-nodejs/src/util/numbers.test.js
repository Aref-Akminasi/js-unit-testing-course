import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

it('should throw an error for string number as input', () => {
  const input = '1';
  const result = transformToNumber(input);
  expect(result).toBeTypeOf('number');
});

it('should yield NaN for non-transformable values', () => {
  const input = 'invalid';
  const input2 = {};
  const result = transformToNumber(input);
  const result2 = transformToNumber(input2);
  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});

it('should yield NaN if called with no argument', () => {
  const result = transformToNumber();
  expect(result).toBeNaN();
});
