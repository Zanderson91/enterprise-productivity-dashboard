const { User, ToDo } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },

    toDos: async (parent, args, context, info) => {
      try {
        const allToDos = await ToDo.find({});
        if (!allToDos) {
          throw new AuthenticationError("Unable to find all the todos");
        }
        return allToDos;
      }
      catch (err) { console.log(err) }
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      console.log(user)

      return { token, user };
    },

    createToDo: async (parent, { text, eagerness, isComplete }, context, info) => {
      try {
        
        const input = {
          text: text,
          eagerness: eagerness,
          isComplete: isComplete
        }
        const toDo = await ToDo.create(input);
        if (!toDo) {
          throw new AuthenticationError("Unable to create todo");
        }
        return toDo;
      }
      catch (err) { console.log(err) }
    },

    updateToDo: async (parent, { _id, text, eagerness, isComplete }, context, info) => {
      try {
        const item = {
          _id: _id,
          text: text,
          eagerness: eagerness,
          isComplete: isComplete,
        }
        const updatedToDo = await ToDo.findOneAndUpdate(
          { _id: _id },
          { $set: item },
          { new: true }
        );
        if (!updatedToDo) {
          throw new AuthenticationError("Unable to find todos with this id");
        }
        return updatedToDo;
      }
      catch (err) { console.log(err); }
    },

    removeToDo: async (parent, { _id }, context, info) => {
      try {
        const toDo = await ToDo.findOneAndDelete({ _id });
        if (!toDo) {
          throw new AuthenticationError("Unable to find todos with this id");
        }
        return toDo;
      }
      catch (err) { console.log(err); }
    },
  },
};

module.exports = resolvers;
