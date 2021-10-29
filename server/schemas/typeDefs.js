const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }
  type ToDo {
    _id: ID!
    text: String
    eagerness: String
    isComplete: String
  }  
  type Query {
    me: User
    toDos: [ToDo]!
  }
  type Auth {
    token: ID
    user: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    createToDo(text: String, eagerness: String, isComplete: String): ToDo
    updateToDo(_id: ID, text: String, eagerness: String, isComplete: String): ToDo
    removeToDo(_id: ID!): ToDo
  }
`;

module.exports = typeDefs;
