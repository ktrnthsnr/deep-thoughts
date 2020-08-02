// import the gql tagged template function
const { gql } = require('apollo-server-express');


// User, Thought, Reaction, Query, Mutation, Auth queries
const typeDefs = gql`

  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    thoughts: [Thought]
    friends: [User]
  }

  type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    addReaction(thoughtId: ID!, reactionBody: String!): Thought
    addFriend(friendId: ID!): User
  }

  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;

// // previous
// type Query {
//   thoughts: [Thought]
// }


// // previous
// // create our typeDefs
// const typeDefs = gql`
//   type Query {
//     // helloWorld: String?
//   }
// `;

// -- previous, without JWT token authenticaion
  // type Mutation {
  //   login(email: String!, password: String!): User
  //   addUser(username: String!, email: String!, password: String!): User
  // }


  // // previous
  // type Mutation {
  //   login(email: String!, password: String!): Auth
  //   addUser(username: String!, email: String!, password: String!): Auth
  // }


  // // previous
  // type Query {
  //   users: [User]
  //   user(username: String!): User
  //   thoughts(username: String): [Thought]
  //   thought(_id: ID!): Thought
  // }