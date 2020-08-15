import React from 'react';

// new-- Link React Router replaces the <a href="/login"> elements, stops page refresh to keep single-page quickness
import { Link } from 'react-router-dom';

const ThoughtList = ({ thoughts, title }) => {
  if (!thoughts.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  // new -- added Link to cards
  return (
    <div>
      <h3>{title}</h3>
      {thoughts &&
        thoughts.map(thought => (
          <div key={thought._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${thought.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {thought.username}
              </Link>{' '}
              thought on {thought.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/thought/${thought._id}`}>
                <p>{thought.thoughtText}</p>
                <p className="mb-0">
                  Reactions: {thought.reactionCount} || Click to{' '}
                  {thought.reactionCount ? 'see' : 'start'} the discussion!
                </p>
              </Link>
           </div>
          </div>
        ))}
    </div>
  );
};

        //   //prev--
                  //   return (
                  //     <div>
                  //       <h3>{title}</h3>
                  //       {thoughts &&
                  //         thoughts.map(thought => (
                  //           <div key={thought._id} className="card mb-3">
                  //             <p className="card-header">
                  //               {thought.username}
                  //               thought on {thought.createdAt}
                  //             </p>
                  //             <div className="card-body">
                  //               <p>{thought.thoughtText}</p>
                  //               <p className="mb-0">
                  //                 Reactions: {thought.reactionCount} || Click to{' '}
                  //                 {thought.reactionCount ? 'see' : 'start'} the discussion!
                  //               </p>
                  //             </div>
                  //           </div>
                  //         ))}
                  //     </div>
                  //   );
                  // };

export default ThoughtList;