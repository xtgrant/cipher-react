
import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import { shallow, configure } from 'enzyme';

import Shift from '../components/Shift';
import Plaintext from '../components/Plaintext';
import Ciphertext from '../components/Ciphertext';

configure({ adapter: new Adapter() });

it('complete app renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

describe("<App />", () => {
  const root = shallow(<App />);
  it('should render Shift', () => {
    expect(root.find(Shift).text()).toEqual('<Shift />');
  });
  it('should render Plaintext', () => {
    expect(root.find(Plaintext).text()).toEqual('<Plaintext />');
  });
  it('should render Ciphertext', () => {
    expect(root.find(Ciphertext).text()).toEqual('<Ciphertext />');
  });

  it('check if plaintext to ciphertext conversion works', () => {
    root.find(Shift).props().onChange({ target: { value: '5' } });
    root.find(Plaintext).props().onChange({ target: { value: 'testthis' } });
    expect(root.find(Ciphertext).props().value).toEqual('yjxyymnx');
  });
});
