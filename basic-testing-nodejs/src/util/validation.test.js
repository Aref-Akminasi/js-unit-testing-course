import { validateStringNotEmpty, validateNumber } from './validation';
import { it, expect, describe } from 'vitest';

describe('validateStringNotEmpty()', () => {
  it('returns undefined if string is not empty', () => {
    const input = 'valid';
    const result = validateStringNotEmpty(input);
    expect(result).toBeUndefined();
  });

  it('throws an error if no argument is provided', () => {
    const resultFn = () => {
      validateStringNotEmpty();
    };
    expect(resultFn).toThrow(/undefined/);
  });

  it('throws an error is string is empty', () => {
    const resultFn = () => {
      const emptyString = '';
      validateStringNotEmpty(emptyString);
    };
    expect(resultFn).toThrow(/must not be empty/);
  });

  it('throws an error for invalid input', () => {
    const resultFn = () => {
      const obj = {};
      validateStringNotEmpty(obj);
    };
    expect(resultFn).toThrow(/not a function/);
  });
});

describe('validateNumber()', () => {
  it('returns undefined if the input is a valid number', () => {
    const input = 123;
    const result = validateNumber(input);
    expect(result).toBeUndefined();
  });

  it('throws an error if the input is not of type number', () => {
    const resultFn = () => {
      const input = 'invalid';
      validateNumber(input);
    };
    expect(resultFn).toThrow(/Invalid number input/);
  });

  it('throws an error for string number input', () => {
    const resultFn = () => {
      const input = '1';
      validateNumber(input);
    };
    expect(resultFn).toThrow(/Invalid number input/);
  });
});
