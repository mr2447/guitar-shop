import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Footer from "./components/Footer";
import React from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'
import Home from './pages/Home'
import EncodeBase64 from './components/Image'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
// import SingleProduct from './pages/SingleProduct';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import SingleProduct from "./pages/SingleThought";
import CloudImages from './components/CloudinaryImages'


const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_,{ headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="App">
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile/:username?" component={Profile} />
          <Route exact path="/product/:id" component={SingleProduct} />

          <Route component={NoMatch} />
        </Switch>
      </div>
      <Main/>
      <CloudImages/>
      <About />
      <Footer />

      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
