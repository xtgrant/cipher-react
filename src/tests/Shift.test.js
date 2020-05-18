import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Select from '@material-ui/core/Select';
import Shift from '../components/Shift';

configure({ adapter: new Adapter() });

describe('<Shift />', () => {
  const props = {
    onChange: jest.fn(),
    value: '1',
  };
  const root = shallow(<Shift {...props} />);
  it('should have Select with props', () => {
    expect(root.find(Select).props().value).toEqual(props.value);
    expect(root.find(Select).props().onChange).toEqual(props.onChange);
  });
});
