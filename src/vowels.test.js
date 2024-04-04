import { it, expect, describe } from 'vitest';
import { countVowelsAndConsonants } from './vowels';

describe('countVowelsAndConsonants()', () => {
  it('should count vowels and consonants if a string is passed', () => {
    //Arrange
    const vowels = 'aeiouAEIOU';
    const consonants = 'zxcvbnm';
    const mix = 'ab'; // 1 vowel, 1 consonant
    //Act
    const vowelsResult = countVowelsAndConsonants(vowels);
    const consonantsResult = countVowelsAndConsonants(consonants);
    const mixResult = countVowelsAndConsonants(mix);
    //Assert
    expect(vowelsResult).toEqual({ vowels: vowels.length, consonants: 0 });
    expect(consonantsResult).toEqual({
      vowels: 0,
      consonants: consonants.length,
    });
    expect(mixResult).toEqual({ vowels: 1, consonants: 1 });
  });

  it('Returns an object with vowels: 0, consonants: 0 if no value is passed', () => {
    //Arrange
    const objZeroValues = { vowels: 0, consonants: 0 };
    //Act
    const result = countVowelsAndConsonants();
    //Assert
    expect(result).toEqual(objZeroValues);
  });

  it('Returns an object with vowels: 0, consonants: 0 if an object is passed', () => {
    //Arrange
    const objZeroValues = { vowels: 0, consonants: 0 };
    const emptyObj = {};
    //Act
    const result = countVowelsAndConsonants(emptyObj);
    //Assert
    expect(result).toEqual(objZeroValues);
  });

  it('should count vowels and consonants if a an array with strings is passed', () => {
    const arrStr = ['a', 'b'];
    const result = countVowelsAndConsonants(arrStr);
    expect(result).toEqual({ vowels: 1, consonants: 1 });
  });
});
