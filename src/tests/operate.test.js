import operate from '../logic/operate';

describe('operate', () => {
  it('adds two numbers', () => {
    const result = operate('10', '5', '+');
    expect(result).toEqual('15');
  });

  it('subtracts two numbers', () => {
    const result = operate('10', '5', '-');
    expect(result).toEqual('5');
  });

  it('multiplies two numbers', () => {
    const result = operate('10', '5', 'x');
    expect(result).toEqual('50');
  });

  it('divides two numbers', () => {
    const result = operate('10', '5', '÷');
    expect(result).toEqual('2');
  });

  it('calculates modulo of two numbers', () => {
    const result = operate('10', '5', '%');
    expect(result).toEqual('0');
  });

  it('throws error for unknown operation', () => {
    expect(() => operate('10', '5', '&')).toThrow("Unknown operation '&'");
  });
});
