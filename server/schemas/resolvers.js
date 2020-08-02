// import User and Thought models
const { User, Thought } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
          // helloWorld: () => {
            // return 'Hello world!';

        // get all users
        users: async () => {
          return User.find()
            .select('-__v -password')
            .populate('friends')
            .populate('thoughts');
        },
        // get a user by username
        user: async (parent, { username }) => {
          return User.findOne({ username })
            .select('-__v -password')
            .populate('friends')
            .populate('thoughts');
        },

        // thoughts: async () => {
        //   return Thought.find().sort({ createdAt: -1 });

        thoughts: async (parent, { username }) => {
          const params = username ? { username } : {};
          return Thought.find(params).sort({ createdAt: -1 });
        },

        thought: async (parent, { _id }) => {
          return Thought.findOne({ _id });
        }
    },

    // mutations, the Mongoose User model creates a new user in the db with args values
      // test in queryql playground 'npm run watch' 
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
      
        return user;
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
      
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
      
        const correctPw = await user.isCorrectPassword(password);
      
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
        
        const token = signToken(user);
        return user;
      }
    }

  };
  
  //export
  module.exports = resolvers;