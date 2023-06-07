import operate from '../operate';

test('performs addition correctly', () => {
  expect(operate('2', '3', '+')).toBe('5');
});

test('performs subtraction correctly', () => {
  expect(operate('5', '3', '-')).toBe('2');
});

test('performs multiplication correctly', () => {
  expect(operate('2', '3', 'x')).toBe('6');
});

test('performs division correctly', () => {
  expect(operate('6', '2', '÷')).toBe('3');
});

test('returns error message when dividing by 0', () => {
  expect(operate('6', '0', '÷')).toBe("Can't divide by 0.");
});

test('performs modulo calculation correctly', () => {
  expect(operate('7', '4', '%')).toBe('3');
});

test('returns error message when dividing by 0 for modulo', () => {
  expect(operate('7', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
});

test('throws an error for unknown operation', () => {
  expect(() => operate('2', '3', '^')).toThrow("Unknown operation '^'");
});
