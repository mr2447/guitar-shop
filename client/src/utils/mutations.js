import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
mutation addProduct($brand: String!, $price: Int!, $condition: String!, $color: String, $publicID: String){
    addProduct(brand: $brand, price: $price, condition: $condition, color: $color, publicID: $publicID) {
      _id
      username
      createdAt
      brand
      condition
      price
      color
      publicID
    }
  }`

export const ADD_IMAGE = gql`
mutation addImage($productId: ID, $image: String) {
  addImage(productId: $productId, image: $image) {
    _id
    images {
      _id
      image
      createdAt
      username
    }
  }
}`