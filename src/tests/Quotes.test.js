import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quotes from '../components/quotes';

describe('Quotes', () => {
  it('renders the component', () => {
    const tree = renderer.create(<Quotes />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the loading state', () => {
    render(<Quotes isLoading />);
    const loading = screen.getByText('Loading...');
    expect(loading).toBeInTheDocument();
  });
});
