//import the gql tagged template function
const { gql } = require('apollo-server-express');

//create our typeDefs
const typeDefs = gql`

type Product {
    _id: ID
    brand: String
    price: Int
    createdAt: String
    username: String
}
type User {
    _id: ID
    username: String
    email: String
    password: String
    createdAt: String

}

type Query {
    products(username: String): [Product]
    users: [User]
    user(username: String!) : User

}`;

//export the typeDefs
module.exports = typeDefs;