import gql from "graphql-tag";

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const CREATE_TODO = gql`
  mutation createToDo($text: String, $eagerness: String, $isComplete: String) {
    createToDo(text: $text, eagerness: $eagerness, isComplete: $isComplete) {
      _id
      text
      eagerness
      isComplete
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation updateToDo($_id: ID, $text: String, $eagerness: String, $isComplete: String) {
    updateToDo(_id: $_id, text: $text, eagerness: $eagerness, isComplete: $isComplete) {
      _id
      text
      eagerness
      isComplete
    }
  }
`;

export const REMOVE_TODO = gql`
  mutation removeToDo($_id: ID!) {
    removeToDo(_id: $_id) {
      text
      eagerness
      isComplete  
    }
  }
`;
