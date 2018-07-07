import React from 'react'
import { ApolloProvider } from 'react-apollo'

import MainContainer from './MainContainer'

const App = ({ graphqlClient }) => (
  <ApolloProvider client={graphqlClient}>
    <MainContainer />
  </ApolloProvider>
)

export default App
