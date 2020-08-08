# QueryQL Playground

## Server directory - GraphQL server API

- Note: Mongodb must be installed prior to running this application.

- To view the site locally on the development server, first install the npm packages
    - $ `npm i` or `npm install`
- Then seed the data
    - $ `npm run seed`
- Start the MongoDB
    - $ `mongod`
- To test the Apollo server sider connections to the Express.js, (to test the schemas and server.js), run the following 
    - $ `cd server`
    - $ `npm run watch`
- Use GraphQL Playground server environment, view locally at 
- $ `http://localhost:3001/graphql`


## Query samples


## get all users

* `cd server`
* `npm run watch`
* open browser to `http://localhost:3001/graphql`

--------------------------------------------------------

query {
  # get all users
  users {
    username
    email
  }

  # get a single user by username (use a username from your database)
  user(username: "5f250ad70c7ac21b7847f63c") {
    username
    email
    friendCount
    thoughts {
      thoughtText
    }
    friends {
      username
    }
  }

  # query all thoughts
  thoughts {
    _id
    username
    thoughtText
    reactions {
      _id
      createdAt
      username
      reactionBody
    }
  }

  # query a single thought (use an _id from a thought in your database)
  thought(_id: "5f250ad70c7ac21b7847f63b") {
    _id
    username
    thoughtText
    createdAt
    reactions {
      username
      reactionBody
    }
  }
}