import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

// new -- React Router gives the single-page the multi-page feel
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// new -- adding the other pages which will have React routes
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import Signup from './pages/Signup';


// new -- create the Apollo Provider
  // these two libraries will import statements
  import { ApolloProvider } from '@apollo/react-hooks';
  import ApolloClient from 'apollo-boost';

// new -- instruct Apollo instance to retrieve token every time a GraphQL request is make
const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});



  // prev--  production connection 
      // const client = new ApolloClient({
      //   uri: '/graphql'
      // });

  // -- development connection; new -- establish connection to backend server's graphql's endpoint
      // const client = new ApolloClient({
      //   uri: 'http://localhost:3001/graphql'
      // });
      

// new -- App function
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/thought" component={SingleThought} />
              <Route exact path="/profile/:username?" component={Profile} />
              <Route exact path="/thought/:id" component={SingleThought} />
              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}


  // -- new app function -- previous
      // function App() {
      //   return (
      //     <ApolloProvider client={client}>
      //       <div className="flex-column justify-flex-start min-100-vh">
      //         <Header />
      //         <div className="container">
      //           <Home />
      //         </div>
      //         <Footer />
      //       </div>
      //     </ApolloProvider>
      //   );
      // }

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
