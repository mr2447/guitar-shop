const {User, Product}= require('../models')
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        // categories: async () => {
        //     return await Category.find();
        //   },
        //me for logged In users
        me: async (parent, args, context) => {
            if(context.user) {
                const userData = await User.findById(context.user._id)
                .select('-__v -password')
                .populate('products')
                return userData;
            }
            throw new AuthenticationError('Not logged in')
        },
        //get all products
        products: async (parent, { category, username }) => {
            const params = username ? {username} : {};
            // const params = {};
            // if (category) {
            //     params.category = category;
            // }

            // if(username) {
            //     params.usernamme = {username}
            // } else {
            //     params = {}
            // }
            return await Product.find(params).sort({createdAt: -1})
            // .populate('category')
        },
        // get all users
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate(
                'products'
            )
            .sort({createdAt: -1})
        },
        // get a user by username
        user: async(parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password')
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user)
            return {token, user};
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if(!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw) {
                throw new AuthenticationError('Incorrect credentials')
            }

            const token = signToken(user);
            return {token, user};
        },
        addProduct: async (parent, args, context) => {
            if(context.user) {
                const product = await Product.create({ ...args, username: context.user.username })

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { products: product._id }},
                    { new: true}
                );

                return product;
            }

            throw new AuthenticationError('You need to be logged in!')
        },
        addImage: async (parent, { productId, image}, context) => {
            if (context.user) {
                const updatedProduct = await Product.findOneAndUpdate(
                    { _id: productId},
                    {$push: { images: { image, username: context.user.username }}},
                    { new: true, runValidators: true }
                );

                return updatedProduct;
            }
            throw new AuthenticationError('You need to be logged in!')
        },
        deleteProduct: async (parent, {productId}, context, info) => {
            if(context.user) {
                const deletedProduct = await await Product.findOneAndDelete(
                    {_id: productId}
                );
                return  deletedProduct
            }
           
        }
    }
}

module.exports = resolvers;