import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
query products($username: String) {
    products(username: $username) {
        _id
        brand
        price
        condition
        username
        createdAt
        publicID
    }
}`

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      products{
        _id
        brand
        price
        condition
        color
        createdAt
        publicID
      }
    }
  }
`;

export const QUERY_PRODUCT= gql`
  query product($id: ID!) {
    product(_id: $id) {
      _id
      brand
      username
      condition
      price
      color
      createdAt
      publicID
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      products {
        _id
        brand
        condition
        price
        createdAt
        publicID
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      products {
        _id
        brand
      }
    }
  }
`;
