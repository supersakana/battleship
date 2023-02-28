import { isValid } from '../src/lib/validate';

/* eslint-disable no-undef */

describe('isValid', () => {
  test('true for combos that are on the same x axis', () => {
    const combo = [22, 23, 24];
    expect(isValid(combo)).toBeTruthy();
  });

  test('true for combos that are on the same y axis', () => {
    const combo = [24, 34, 44];
    expect(isValid(combo)).toBeTruthy();
  });

  test('false for combos that have different y value', () => {
    const combo = [28, 29, 30];
    expect(isValid(combo)).toBeFalsey();
  });

  test('false for combos that exceed board parameters', () => {
    const combo = [80, 90, 100];
    expect(isValid(combo)).toBeFalsey();
  });
});
