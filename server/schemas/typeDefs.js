//import the gql tagged template function
const { gql } = require('apollo-server-express');

//deleted publicID: STRING from type Product ################
//create our typeDefs
const typeDefs = gql`
    type Category {
        _id: ID
        name: String
    }

    type Product {
        _id: ID
        brand: String
        price: Int
        condition: String
        color: String
        username: String
        createdAt: String
        publicID: String
     
    }

    type Order {
        _id: ID
        purchaseDate: String
        products: [Product]
    }

    type Image {
        _id: ID
        image: String
        createdAt: String
        username: String
    }

    type Checkout {
        session: ID
      }

    type User {
        _id: ID
        username: String
        email: String
        password: String
        createdAt: String
        products: [Product]
        orders: [Order]
    }


    type Query {
        me: User
        products(username: String): [Product]
        users: [User]
        user(username: String!) : User
        order(_id: ID!): Order
        checkout(products: [ID]!): Checkout
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addProduct(brand: String!, price: Int!, condition: String!, color: String, publicID: String): Product
        addImage(productId: ID, image: String): Product
        addOrder(products: [ID]!): Order
        deleteProduct(productId: ID!): Product!
    }


    type Auth {
        token: ID!
        user: User
    }
`;


//export the typeDefs
module.exports = typeDefs;