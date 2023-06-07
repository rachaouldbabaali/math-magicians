import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/home';

describe('Home', () => {
  it('renders the component', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the component', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to our page')).toBeInTheDocument();
  });
});
