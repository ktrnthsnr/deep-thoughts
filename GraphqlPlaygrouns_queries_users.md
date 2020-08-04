# queryql playground

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