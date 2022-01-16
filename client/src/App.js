import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Footer from "./components/Footer";
import React from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'
import Home from './pages/Home'
import EncodeBase64 from './components/Image'

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
      <div className="App">
      <Header />
      <Main/>
      <About />
      <Footer />
      <Home />
      </div>
    </ApolloProvider>
  );
}

export default App;
