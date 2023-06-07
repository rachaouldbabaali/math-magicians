import renderer from 'react-test-renderer';
import Quotes from '../components/quotes';

describe('Quotes', () => {
  it('renders the component', () => {
    const tree = renderer.create(<Quotes />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
