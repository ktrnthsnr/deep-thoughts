import React from 'react';
// new -- import the apollo hooks
import { useQuery } from '@apollo/react-hooks';
// import { QUERY_THOUGHTS } from '../utils/queries';
import ThoughtList from '../components/ThoughtList';
import FriendList from '../components/FriendList';

// new -- add JSON web token (JWT)
import Auth from '../utils/auth';
// new -- import queries
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';


const Home = () => {
  // use useQuery hook to make GraphQL query requests
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  // use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
  const { data: userData } = useQuery(QUERY_ME_BASIC);

   // -- optional chaining syntax, if data exists store in the thought constant, if not store in empty array
  const thoughts = data?.thoughts || []; 
  console.log(thoughts);
    // removed -- test on both client & server - 
      // cd client, npm start localhost:3000; 
      // cd server, npm run watch (localhost:3001/graphql)

  const loggedIn = Auth.loggedIn();

  return (
    <main>
    <div className="flex-row justify-space-between">
       

          <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
              {loading ? (
                <div>Loading...</div>
             ) : (
                <ThoughtList thoughts={thoughts} title="Some Feed for Thought(s)..." />
              )}
            </div>

              {loggedIn && userData ? (
                <div className="col-12 col-lg-3 mb-3">
                  <FriendList
                    username={userData.me.username}
                    friendCount={userData.me.friendCount}
                    friends={userData.me.friends}
                    />
            </div>
          ) : null}
    </div>
  </main>
  );
};

// const Home = () => {
//   return (
//     <main>
//       <div className='flex-row justify-space-between'>
//         <div className='col-12 mb-3'>{/* PRINT THOUGHT LIST */}</div>
//       </div>
//     </main>
//   );
// };

export default Home;
