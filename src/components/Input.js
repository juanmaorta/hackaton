import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { trim } from 'lodash/string'

const ENTER_KEY_NAME = 'Enter'

class Input extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  handleChange = (evt) => {
    this.setState({
      value: trim(evt.target.value)
    })
  }

  onKeyPress = (evt) => {
    if (evt.key === ENTER_KEY_NAME) {
      evt.preventDefault()
      if (this.state.value) {
        this.submit()
      }
    }
  }

  submit = () => {
    this.props.onSubmit(this.state.value)
  }

  render () {
    const { placeHolder, name } = this.props
    const { value } = this.state
    return (
      <input
        type='text'
        value={value}
        name={name}
        placeholder={placeHolder}
        onChange={this.handleChange}
        onKeyPress={this.onKeyPress}
      />
    )
  }
}

Input.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

export default Input
