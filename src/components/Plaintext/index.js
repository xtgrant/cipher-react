import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

class Plaintext extends Component {
  render() {
    return (
      <div className="left">
        <center>
          <h2>Plaintext</h2>
          <TextField
            multiline
            onChange={this.props.onChange}
            rowsMax="10"
            margin="normal"
            placeholder="Enter plaintext"
            value={this.props.value}
          />
        </center>
      </div>
    );
  }
}

Plaintext.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Plaintext;
