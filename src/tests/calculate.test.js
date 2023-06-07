import calculate from '../logic/calculate';

describe('calculate', () => {
  it('returns an object with null values when AC button is pressed', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('appends number to next if operation is present and next is not 0', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '3');
    expect(result).toEqual({ total: '10', next: '53', operation: '+' });
  });

  it('updates next to 0.number if operation is present and next is 0', () => {
    const result = calculate({ total: '10', next: '0', operation: '+' }, '.');
    expect(result).toEqual({ total: '10', next: '0.', operation: '+' });
  });

  it('does not append decimal if next already has decimal', () => {
    const result = calculate({ total: '10', next: '5.2', operation: null }, '.');
    expect(result).toEqual({ total: '10', next: '5.2', operation: null });
  });

  it('updates next to 0. if no operation or total is present', () => {
    const result = calculate({ total: null, next: null, operation: null }, '.');
    expect(result).toEqual({ total: null, next: '0.', operation: null });
  });

  it('computes result and clears next and operation if equal button is pressed', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '=');
    expect(result).toEqual({ total: '15', next: null, operation: null });
  });

  it('returns empty object if equal button is pressed and no operation or next is present', () => {
    const result = calculate({ total: null, next: null, operation: null }, '=');
    expect(result).toEqual({});
  });

  it('negates next if next is present', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '+/-');
    expect(result).toEqual({ total: '10', next: '-5', operation: '+' });
  });

  it('negates total if next is not present', () => {
    const result = calculate({ total: '10', next: null, operation: '+' }, '+/-');
    expect(result).toEqual({ total: '-10', next: null, operation: '+' });
  });

  it('returns object with operation if no next is present and equal button was pressed before', () => {
    const result = calculate({ total: '10', next: null, operation: null }, '+');
    expect(result).toEqual({ total: '10', next: null, operation: '+' });
  });

  it('returns object with operation if total is present and next is not present', () => {
    const result = calculate({ total: '10', next: null, operation: '+' }, '-');
    expect(result).toEqual({ total: '10', next: null, operation: '-' });
  });

  it('computes result and updates operation if total and next are present', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '-');
    expect(result).toEqual({ total: '15', next: null, operation: '-' });
  });

  it('updates total and operation if no next is present', () => {
    const result = calculate({ total: '10', next: null, operation: '+' }, '-');
    expect(result).toEqual({ total: '10', next: null, operation: '-' });
  });

  it('updates total to next and clears next if operation button is pressed', () => {
    const result = calculate({ total: null, next: '5', operation: null }, '+');
    expect(result).toEqual({ total: '5', next: null, operation: '+' });
  });
});
