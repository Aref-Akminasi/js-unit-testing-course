import { describe, it, expect } from 'vitest';
import { transformToNumber, cleanNumbers } from './numbers';

describe('transformToNumber()', () => {
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
});

describe('cleanNumbers()', () => {
  it('should return an array with number values when array with string numbers is provided', () => {
    const numberValues = ['1', '2', '3'];
    const cleanedNumbers = cleanNumbers(numberValues);
    expect(cleanedNumbers[0]).toBeTypeOf('number');
  });

  it('should throw an error if an array with at least one empty string is provided', () => {
    const numberValues = ['', 1];
    const cleanFn = () => cleanNumbers(numberValues);
    expect(cleanFn).toThrow();
  });
});
