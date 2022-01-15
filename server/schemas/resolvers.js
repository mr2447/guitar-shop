const {User, Product}= require('../models')
// const Thought = require('../models/Thought')


const resolvers = {
    Query: {
        //get all products
        products: async (parent, { username }) => {
            const params = username? { username } : {};
            return Product.find(params).sort({createdAt: -1})
        },
        // get all users
        users: async () => {
            return User.find()
            .select('-__v -password')
            .sort({createdAt: -1})
        },
        // get a user by username
        user: async(parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password')
        }
    }
}

module.exports = resolvers;