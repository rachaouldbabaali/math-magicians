import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';
import calculate from '../logic/calculate';

describe('Calculator', () => {
  it('renders the component', () => {
    const { getByText } = render(<Calculator result={{}} setResult={() => {}} />);
    expect(getByText('Let\'s do some math!')).toBeInTheDocument();
  });

  it('updates the display when a button is clicked', () => {
    const setResult = jest.fn();
    const { getByText, getByDisplayValue } = render(<Calculator result={{}} setResult={setResult} />);
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(setResult).toHaveBeenCalledWith({ total: '3', next: null, operation: '+' });
    expect(getByDisplayValue('3')).toBeInTheDocument();
  });

  it('clears the display when the AC button is clicked', () => {
    const setResult = jest.fn();
    const { getByText, getByDisplayValue } = render(<Calculator result={{}} setResult={setResult} />);
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('AC'));
    expect(setResult).toHaveBeenCalledWith({ total: null, next: null, operation: null });
    expect(getByDisplayValue('0')).toBeInTheDocument();
  });
});