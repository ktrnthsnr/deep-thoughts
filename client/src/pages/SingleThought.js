import React from 'react';

// new -- import the React hook, to access ID from the URL
import { useParams } from 'react-router-dom';

const SingleThought = props => {

  // new -- to access ID from the URL from console.log
    const { id: thoughtId } = useParams();
    console.log(thoughtId);

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            Username
          </span>{' '}
          thought on createdAt
        </p>
        <div className="card-body">
          <p>Thought Text</p>
        </div>
      </div>
    </div>
  );
};

export default SingleThought;
