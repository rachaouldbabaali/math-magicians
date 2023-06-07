import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  it('renders the component', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the component', () => {
    const { getByText } = render(
      <Calculator result={{}} setResult={() => {}} />,
    );
    expect(getByText("Let's do some math!")).toBeInTheDocument();
  });
});
