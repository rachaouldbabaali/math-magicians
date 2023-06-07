import renderer from 'react-test-renderer';
import Home from '../components/home';

describe('Home', () => {
  it('renders the component', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
