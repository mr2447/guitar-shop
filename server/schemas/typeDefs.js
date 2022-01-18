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

    type Image {
        _id: ID
        image: String
        createdAt: String
        username: String
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
        createdAt: String
        products: [Product]

    }


    type Query {
        me: User
        products(username: String): [Product]
        users: [User]
        user(username: String!) : User
       

    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addProduct(brand: String!, price: Int!, condition: String!, color: String, publicID: String): Product
        addImage(productId: ID, image: String): Product
    }


    type Auth {
        token: ID!
        user: User
    }
`;


//export the typeDefs
module.exports = typeDefs;