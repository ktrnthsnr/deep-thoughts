import React from 'react';

// new -- import from the new components
import ReactionList from '../components/ReactionList';
import ReactionForm from '../components/ReactionForm';

// new -- import the React hook, to access ID from the URL
import { useParams } from 'react-router-dom';

// new -- useQuery hook to import from utils/queries
import { useQuery } from '@apollo/react-hooks';
import { QUERY_THOUGHT } from '../utils/queries';

// new -- adding JSON Web Token (JWT) authentication from the utils auth.js, for adding Reaction component
import Auth from '../utils/auth';

const SingleThought = props => {

  // new / prev -- initial  check to access ID from the URL from console.log
    // const { id: thoughtId } = useParams();
    // console.log(thoughtId);

  // new -- adding thought object from utils/queries.js
    // ( id property on the variables object will become the $id param in the GraphQL query)
    const { id: thoughtId } = useParams();
    const { loading, data } = useQuery(QUERY_THOUGHT, {
      variables: { id: thoughtId }
    });
    const thought = data?.thought || {};
    if (loading) {
      return <div>Loading...</div>;
    }

    // new -- after adding ReactionList component & thought object above
    return (
      <div>
       <div>
          <div className="card mb-3">
            <p className="card-header">
              <span style={{ fontWeight: 700 }} className="text-light">
                {thought.username}
              </span>{' '}
              thought on {thought.createdAt}
            </p>
            <div className="card-body">
              <p>{thought.thoughtText}</p>
            </div>
          </div>
          {thought.reactionCount > 0 && <ReactionList reactions={thought.reactions} />}
        </div>

              {Auth.loggedIn() && <ReactionForm thoughtId={thought._id} />}

    </div>
    );
  };


  // // new -- after adding thought object, updated the JSX
      //   return (
      //     <div>
      //       <div className="card mb-3">
      //         <p className="card-header">
      //           <span style={{ fontWeight: 700 }} className="text-light">
      //             {thought.username}
      //           </span>{' '}
      //           thought on {thought.createdAt}
      //         </p>
      //         <div className="card-body">
      //           <p>{thought.thoughtText}</p>
      //         </div>
      //       </div>
      //   </div>
      //   );
      // };

// // before
    //   return (
    //     <div>
    //       <div className="card mb-3">
    //         <p className="card-header">
    //           <span style={{ fontWeight: 700 }} className="text-light">
    //             Username
    //           </span>{' '}
    //           thought on createdAt
    //         </p>
    //         <div className="card-body">
    //           <p>Thought Text</p>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // };

export default SingleThought;
