import React from 'react';

// new-- Link React Router replaces the <a href="/login"> elements, stops page refresh to keep single-page quickness
import { Link } from 'react-router-dom';

// new -- adding JSON Web Token (JWT) authentication from the utils auth.js
import Auth from '../../utils/auth';


// new --
const Header = () => {

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>Deep Thoughts</h1>
        </Link>
         <nav className="text-center">
            {Auth.loggedIn() ? (
              <>
                <Link to="/profile">Me</Link>
                <a href="/" onClick={logout}>
                  Logout
                </a>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </>
            )}
          </nav>
      </div>
    </header>
  );
};

            // prev -- 
              // <nav className="text-center">
              //   <Link to="/login">Login</Link>
              //   <Link to="/signup">Signup</Link>
              // </nav> 


//-- prev
    // const Header = () => {
    //   return (
    //     <header className="bg-secondary mb-4 py-2 flex-row align-center">
    //       <div className="container flex-row justify-space-between-lg justify-center align-center">
    //         <h1>Deep Thoughts</h1>
    //       </div>
    //     </header>
    //   );
    // };

export default Header;
