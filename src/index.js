import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import { createHttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'

// import { configureStore } from './App/store'

const configLink = {
  uri: `https://graphql.org/swapi-graphql/`
  // credentials: 'include'
}

const graphqlClient = new ApolloClient({
  link: ApolloLink.from([createHttpLink(configLink)]),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <App graphqlClient={graphqlClient} />,
  document.getElementById('root')
)

registerServiceWorker()
