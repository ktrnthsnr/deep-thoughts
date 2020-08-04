import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

// new -- create the Apollo Provider
  // these two libraries will import statements
  import { ApolloProvider } from '@apollo/react-hooks';
  import ApolloClient from 'apollo-boost';

  // new -- establish connection to backend server's graphql's endpoint
  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql'
  });

  // -- new app function
  function App() {
    return (
      <ApolloProvider client={client}>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Home />
          </div>
          <Footer />
        </div>
      </ApolloProvider>
    );
  }

  // -- previous
    // function App() {
    //   return (
    //     <div className='flex-column justify-flex-start min-100-vh'>
    //       <Header />
    //       <div className='container'>
    //         <Home />
    //       </div>
    //       <Footer />
    //     </div>
    //   );
    // }

export default App;
