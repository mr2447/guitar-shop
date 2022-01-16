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
    }
}`