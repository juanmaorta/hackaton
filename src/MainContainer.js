import React, { Component } from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'

const images = [
  {
    href: 'images/fulls/01.jpg',
    src: 'images/thumbs/01.jpg',
    title: 'Magna feugiat lorem',
    description: 'Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.'
  },
  {
    href: 'images/fulls/01.jpg',
    src: 'images/thumbs/01.jpg',
    title: 'Magna feugiat lorem',
    description: 'Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.'
  }
]

class MainContainer extends Component {
  render () {
    return (
      <div>
        <SearchBar
          onSubmit={(q) => console.log(`going to look for ${q}`)}
          placeHolder='i.e: cute bunnies'
          title='Search for some gifs'
        />
        <ImageList
          list={images}
        />
      </div>
    )
  }
}

export default MainContainer
