import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class Shift extends Component {
  render() {
    return (
      <div className="shift">
        <center>
          <Select
            autoWidth={true}
            onChange={this.props.onChange}
            value={this.props.value}
            displayEmpty>
            <MenuItem value="" disabled>Enter shift amount</MenuItem>
            {Array(26).fill().map((_, i) =>
              (
                <MenuItem value={i + 1}>{i + 1}</MenuItem>
              )
            )}
          </Select>
        </center>
      </div>
    );
  }
};

Shift.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Shift;
