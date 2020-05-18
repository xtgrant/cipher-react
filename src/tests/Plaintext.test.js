import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import TextField from '@material-ui/core/TextField';
import Plaintext from '../components/Plaintext';

configure({ adapter: new Adapter() });

describe('<Plaintext />', () => {
  const props = {
    onChange: jest.fn(),
    value: 'test',
  };
  const root = shallow(<Plaintext {...props} />);
  it('should have Textfield with props', () => {
    expect(root.find(TextField).props().value).toEqual(props.value);
    expect(root.find(TextField).props().onChange).toEqual(props.onChange);
  });
});
