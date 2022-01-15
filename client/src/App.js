import React from 'react'
import './App.css';

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'
import Home from './pages/Home'

const httplinnk = createHttpLink({
  uri: 'http://localhost:3001/graphql'
});

// const authLink = setContext((_,{ headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

const client = new ApolloClient({
  link: httplinnk,
  cache: new InMemoryCache(),
})
function App() {
  return (
    <ApolloProvider client={client}>
      <h3>Hello</h3>
      <div className='container'>
        <Home />
      </div>
    </ApolloProvider>
  );
}

export default App;
