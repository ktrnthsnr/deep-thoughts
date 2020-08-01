# sample graphql playground queries

---------------------------------------------------------------------------
query {
  helloWorld
}# Write your query or mutation here

---------------------------------------------------------------------------
query {
  thoughts {
    _id
    username
    thoughtText
    createdAt
  }
}

---------------------------------------------------------------------------
query {
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
}

---------------------------------------------------------------------------
-- here are two queries, where for the second one you'll need to enter the ID of a thought before running.

    query {
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

    # query a single thought, use the `_id` value of a thought that returned from a previous query
    thought(_id: "<thought-id-here>") {
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

---------------------------------------------------------------------------
    -- multiple queries in one, whereby you'll have to enter in the ID of the thought, ID of the user

    query {
  # get all users
  users {
    username
    email
  }

  # get a single user by username (use a username from your database)
  user(username: "<username-goes-here>") {
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
  thought(_id: "<thought-id-here>") {
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

---------------------------------------------------------------------------

-- querySingleUser --------------- see below for Query Variable required.

        query getSingleUser($username: String!) {
        user(username: $username) {
            username
            friendCount
            thoughts {
            thoughtText
            createdAt
            }
            friends {
            username
            }
        }
        }

        ------------ Query Variable: (you'll need to update the user name here)
        {
        "username": "<username-goes-here>"
        }

        ------------ Query Variable: for example
        {
        "username": "Devyn42"
        }

---------------------------------------------------------------------------

mutation {
  addUser(username:"tester", password:"test12345", email:"test@test.com") {
    _id
    username
    email
  }
}

---------------------------------------------------------------------------



mutation addUser($username: String!, $password: String!, $email: String!) {
  addUser(username: $username, password: $password, email: $email) {
    _id
    username
    email
  }
}
    -- with query variables
    {
      "username": "tester2",
      "password": "test12345",
      "email": "test2@test.com"
    }

---------------------------------------------------------------------------