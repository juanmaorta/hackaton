import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { ApolloConsumer } from 'react-apollo'

import SearchBar from './components/SearchBar'
import FilmList from './components/FilmList'
import ImageList from "./components/ImageList";

const images = [
  {
    href: "images/fulls/01.jpg",
    src: "images/thumbs/01.jpg",
    title: "Magna feugiat lorem",
    description:
      "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit."
  },
  {
    href: "images/fulls/01.jpg",
    src: "images/thumbs/01.jpg",
    title: "Magna feugiat lorem",
    description:
      "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit."
  }
];

class MainContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      films: [],
      images: images
    }
  }

  onFilmsFetched = (films) => {
    this.setState({
      films
    })
  }

  submitQuery = (q) => {
    console.log(`going to look for ${q}`)
  }

  render () {
    return (
      <ApolloConsumer>
        {client => {
          return (
              <div>
                <SearchBar
                  onSubmit={this.submitQuery}
                  placeHolder='Search'
                  title='Welcome to Giffy'
                />
                <button
                  onClick={async () => {
                    const { data } = await client.query({
                      query: STAR_WARS,
                      variables: { query: "sleepy bumnny" }
                    });
                    console.log(data)
                    this.onFilmsFetched(data.allFilms)
                    // this.onDogFetched(data.dog);
                  }}
                >
                  Click me!
                </button>
                <ImageList list={this.state.images } />
              </div>
            )
        }}
      </ApolloConsumer>
    )
  }
}

export const GIPHY_QUERY = gql`
  query giphyQuery ($query: String!) {
  graphQLHub
    giphy {
      search(query: $query) {
        id
        url
        images {
          original {
            url
          }
        }
      }
    }
  }
`

export const COUNTRIES_QUERY = gql`
  query {
    countries {
      edges {
        node {
          id
        }
      }
    }
  }
`

export const STAR_WARS = gql`
  query {
      allFilms {
        films {
          id
          title
          openingCrawl
        }
      }
  }
`

export default MainContainer
