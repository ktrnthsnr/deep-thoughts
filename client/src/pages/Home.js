import React from 'react';
//import the apollo hooks
import { useQuery } from '@apollo/react-hooks';
import { QUERY_THOUGHTS } from '../utils/queries';
import ThoughtList from '../components/ThoughtList';

const Home = () => {
  // use useQuery hook to make GraphQL query requests
  const { loading, data } = useQuery(QUERY_THOUGHTS);
   // -- optional chaining syntax, if data exists store in the thought constant, if not store in empty array
  const thoughts = data?.thoughts || []; 
  console.log(thoughts);
    // test on both client & server - 
      // cd client, npm start localhost:3000; 
      // cd server, npm run watch (localhost:3001/graphql)

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList thoughts={thoughts} title="Some Feed for Thought(s)..." />
          )}
        </div>
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
