import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

class Ciphertext extends Component {
  render() {
    return (
      <div className="right">
        <center>
          <h2>Ciphertext</h2>
          <TextField
            multiline
            onChange={this.props.onChange}
            rowsMax="10"
            margin="normal"
            placeholder="Enter ciphertext"
            value={this.props.value}
          />
        </center>
      </div>
    );
  }
}

Ciphertext.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Ciphertext;
