import gql from "graphql-tag";

export const GET_USER = gql`
  {
    me {
      _id
      firstName
      lastName
      email
    }
  }
`;

export const QUERY_GET_TODOS = gql` 
  query getToDos {
    toDos {
      _id
      text
      eagerness
      isComplete
    }
  } 
`;
