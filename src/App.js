import React, {Component} from 'react';
import Plaintext from './components/Plaintext';
import Ciphertext from './components/Ciphertext';
import Shift from './components/Shift';
import Paper from '@material-ui/core/Paper';
import { decrypt, encrypt, parseStr } from './utils/cipher';


class Main extends Component {
  state = {
    plainValue: '',
    cipherValue: '',
    shiftValue: 1,
  };

  onPlainChange = (evt) => {
    const str = parseStr(evt.target.value);
    this.setState({
      plainValue: str,
      cipherValue: encrypt(str, this.state.shiftValue),
    });
  };

  onCipherChange = (evt) => {
    const str = parseStr(evt.target.value);
    this.setState({
      cipherValue: str,
      plainValue: decrypt(str, this.state.shiftValue),
    });
  };

  onShiftChange = (evt) => {
    this.setState({
      shiftValue: parseInt(evt.target.value),
    });
  };

  render() {
    return (
      <div className="container">
        <center><h1>Caesar's Cipher</h1></center>
        <Shift
          onChange={this.onShiftChange}
          value={this.state.shiftValue}
        ></Shift>
        <Paper elevation={10} className="child-container">
          <Plaintext
            value={this.state.plainValue}
            onChange={this.onPlainChange}
          ></Plaintext>
          <Ciphertext
            value={this.state.cipherValue}
            onChange={this.onCipherChange}
          ></Ciphertext>
        </Paper>
      </div>
    );
  }
}

export default Main;
