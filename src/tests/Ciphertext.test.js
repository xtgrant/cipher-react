import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import TextField from '@material-ui/core/TextField';
import Ciphertext from '../components/Ciphertext';

configure({ adapter: new Adapter() });

describe("<Ciphertext />", () => {
  const props = {
    onChange: jest.fn(),
    value: 'test',
  };
  const root = shallow(<Ciphertext {...props} />);
  it('should have Textfield with props', () => {
    expect(root.find(TextField).props().value).toEqual(props.value);
    expect(root.find(TextField).props().onChange).toEqual(props.onChange);
  });
});
