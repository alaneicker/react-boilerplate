import Enzyme from 'enzyme/build'; // eslint-disable-line
import Adapter from 'enzyme-adapter-react-16/build'; // eslint-disable-line

Enzyme.configure({ adapter: new Adapter() });