import {isNotEmptyString, isGreekVowel} from '../src/utilities';

describe('is not empty string', () => {
  test('returns true when given a string', () => {
    expect(isNotEmptyString('Μάκης')).toBeTruthy();
  });

  test('returns true when given a character', () => {
    expect(isNotEmptyString('Μ')).toBeTruthy();
  });

  test('returns false when given a number', () => {
    expect(isNotEmptyString(4)).toBeFalsy();
  });

  test('returns false when given undefined', () => {
    expect(isNotEmptyString(undefined)).toBeFalsy();
  });

  test('returns false when given an empty string', () => {
    expect(isNotEmptyString('')).toBeFalsy();
  });

  test('returns false when given an empty {}', () => {
    expect(isNotEmptyString({})).toBeFalsy();
  });
});

describe('is greek vowel', () => {
  test('returns true when given a greek vowel', () => {
    expect(isGreekVowel('ο')).toBe(true);
  });

  test('returns true when given a greek vowel with intonation', () => {
    expect(isGreekVowel('ά')).toBe(true);
  });

  test('returns false when given a char that is not a greek vowel', () => {
    expect(isGreekVowel('a')).toBe(false);
  });

  test('returns false when given an empty string', () => {
    expect(isGreekVowel('')).toBe(false);
  });

  test('returns false when given a string', () => {
    expect(isGreekVowel('asdf')).toBe(false);
  });

  test('returns false when given a number', () => {
    expect(isGreekVowel(3)).toBe(false);
  });

  test('returns false when given undefined', () => {
    expect(isGreekVowel(undefined)).toBe(false);
  });
});
