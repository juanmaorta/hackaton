import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const ENTER_KEY_NAME = 'Enter';

class Input extends Component {
  /**
  onKeyPress = evt => {
    if (evt.key === ENTER_KEY_NAME) {
      evt.preventDefault();
      if (this.state.value) {
        this.submit();
      }
    }
  }
  */

  render() {
    const { placeHolder, name, value, onChange } = this.props;

    return (
      <input
        value={value}
        name={name}
        placeholder={placeHolder}
        onChange={onChange}
        // onKeyPress={this.onKeyPress}
        className='form-control mr-sm-2'
        type='search'
        aria-label='Search'
      />
    );
  }
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default Input;
