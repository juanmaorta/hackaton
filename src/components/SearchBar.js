import React from 'react'
import Input from './Input'

const SearchBar = ({placeHolder, title, onSubmit}) => (
  <div>
    <p>{title}</p>
    <form>
      <Input
        name='q'
        placeHolder={placeHolder}
        onSubmit={onSubmit}
      />
    </form>
  </div>
)

export default SearchBar
