import React, { Component } from 'react'
import Input from './Input'

class SearchBar extends Component {

    constructor (props) {
      super(props)

      this.state = {
        value: ''
      }
    }

   onSearchSubmit = (evt) => {
    evt.preventDefault()
    console.log('submit!', this.state.value)
  }

  handleChange = evt => {
    this.setState({
      value: evt.target.value
    });
  }

  render () {
    const { placeHolder, title } = this.props
    const { value } = this.state

    return (
      <nav className='navbar navbar-dark bg-dark justify-content-between navbar-fixed-top'>
        <div className='navbar-brand'>{title}</div>
        <form className='form-inline'>
          <Input
            name='q'
            placeHolder={placeHolder}
            onChange={this.handleChange}
            value={value}
          />
          <button
            className='btn btn-dark my-2 my-sm-0'
            type='submit'
            onClick={this.onSearchSubmit}
          >
            Search
          </button>
        </form>
      </nav>
    )
  }
}

export default SearchBar
