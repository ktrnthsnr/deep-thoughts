import React from 'react';

// new -- adding redirect 
import { Redirect, useParams } from 'react-router-dom';

// new -- importing components, and user queries from utils, and JWT authentication utility
// import { useParams } from 'react-router-dom';
import ThoughtList from '../components/ThoughtList';
import { useQuery } from '@apollo/react-hooks';
// import { QUERY_USER } from '../utils/queries';
import FriendList from '../components/FriendList';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
// new -- importing JWT authService
import Auth from '../utils/auth';



// new -- after importing the updated thoughtlist component,(with profile links) and user profile query, and friendlist
const Profile = () => {
        const { username: userParam } = useParams();

        // const { loading, data } = useQuery(QUERY_USER, {
        //   variables: { username: userParam }
        // });

        const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
          variables: { username: userParam }
        });

        // const user = data?.user || {};
        const user = data?.me || data?.user || {};

        // redirect to personal profile page if username is the logged-in user's
        if (Auth.loggedIn() && Auth.getProfile().data.username.toLowerCase() === userParam.toLowerCase()) {
          return <Redirect to="/profile" />;
        }


        if (loading) {
          return <div>Loading...</div>;
        }

        if (!user?.username) {
          return (
            <h4>
              You need to be logged in to see this page. Use the navigation links above to sign up or log in!
            </h4>
          );
        }


        return (
          <div>
            <div className="flex-row justify-space-between mb-3">

                  <div className="flex-row mb-3">
                      <h2 className="bg-dark text-secondary p-3 display-inline-block">
                        Viewing {userParam ? `${user.username}'s` : 'your'} profile.
                      </h2>
                  </div>

                  <div className="col-12 mb-3 col-lg-8">
                    <ThoughtList thoughts={user.thoughts} title={`${user.username}'s thoughts...`} />
                  </div>
                  
                  <div className="col-12 col-lg-3 mb-3">
                    <FriendList
                      username={user.username}
                      friendCount={user.friendCount}
                      friends={user.friends}
                    />
                  </div>
                  
            </div>
          </div>
        );
};

// // prev new -- after importing the updated thoughtlist component (with profile links) and user profile query
      //   const Profile = () => {
      //       const { username: userParam } = useParams();
      //       const { loading, data } = useQuery(QUERY_USER, {
      //         variables: { username: userParam }
      //       });
      //       const user = data?.user || {};

      //       if (loading) {
      //         return <div>Loading...</div>;
      //       }
      //       return (
      //         <div>

      //           <div className="flex-row mb-3">
      //             <h2 className="bg-dark text-secondary p-3 display-inline-block">
      //               Viewing {user.username}'s profile.
      //             </h2>
      //           </div>

      //           <div className="flex-row justify-space-between mb-3">
      //             <div className="col-12 mb-3 col-lg-8">
      //               <ThoughtList thoughts={user.thoughts} title={`${user.username}'s thoughts...`} />
      //             </div>
      //           </div>

      //         </div>
      //       );
      //   };

// // before -- importing from thoughtlight and user profile query
    // const Profile = () => {
    //   return (
    //     <div>
    //       <div className="flex-row mb-3">
    //         <h2 className="bg-dark text-secondary p-3 display-inline-block">
    //           {/* Viewing <usernames>'s profile. */}
    //         </h2>
    //       </div>

    //       <div className="flex-row justify-space-between mb-3">
    //         <div className="col-12 mb-3 col-lg-8">{/* PRINT THOUGHT LIST  */}</div>

    //         <div className="col-12 col-lg-3 mb-3">{/* PRINT FRIEND LIST */}</div>
    //       </div>
    //     </div>
    //   );
    // };

export default Profile;
