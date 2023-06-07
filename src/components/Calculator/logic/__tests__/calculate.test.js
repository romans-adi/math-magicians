import calculate from '../calculate';
import operate from '../operate';

describe('calculate', () => {
  test('should reset the calculator state when "AC" button is clicked', () => {
    const initialState = {
      total: '123',
      next: '666',
      operation: '+',
    };

    const expectedState = {
      total: null,
      next: null,
      operation: null,
    };

    expect(calculate(initialState, 'AC')).toEqual(expectedState);
  });

  test('should update the state when a number button is clicked', () => {
    const initialState = {
      total: '123',
      next: '66',
      operation: '+',
    };

    const expectedState = {
      total: '123',
      next: '666',
      operation: '+',
    };

    expect(calculate(initialState, '6')).toEqual(expectedState);
  });

  test('should handle decimal point correctly', () => {
    const initialState = {
      total: '123',
      next: '666',
      operation: '+',
    };

    const expectedState = {
      total: '123',
      next: '666.',
      operation: '+',
    };

    expect(calculate(initialState, '.')).toEqual(expectedState);
  });

  test('should perform the calculation when "=" button is clicked', () => {
    const initialState = {
      total: '123',
      next: '666',
      operation: '+',
    };

    const expectedState = {
      total: '789',
      next: null,
      operation: null,
    };

    expect(calculate(initialState, '=')).toEqual(expectedState);
  });

  test('should toggle the sign of the number when "+/-" button is clicked', () => {
    const initialState = {
      total: null,
      next: '666',
      operation: null,
    };

    const expectedState = {
      total: null,
      next: '-666',
      operation: null,
    };

    expect(calculate(initialState, '+/-')).toEqual(expectedState);
  });
});

describe('operate', () => {
  test('should perform addition correctly', () => {
    expect(operate('66', '6', '+')).toEqual('72');
  });

  test('should perform subtraction correctly', () => {
    expect(operate('66', '6', '-')).toEqual('60');
  });

  test('should perform multiplication correctly', () => {
    expect(operate('66', '6', 'x')).toEqual('396');
  });

  test('should perform division correctly', () => {
    expect(operate('66', '6', '÷')).toEqual('11');
  });
});
