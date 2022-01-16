const faker = require('faker');

const db = require('../config/connection');
const { Product, User} = require('../models');

db.once('open', async () => {
  await Product.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 2; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();
    // console.log({ username, email, password })
    userData.push({ username, email, password });
  }

const createdUsers = await User.collection.insertMany(userData);


  // // create friends
  // for (let i = 0; i < 100; i += 1) {
  //   const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  //   const { _id: userId } = createdUsers.ops[randomUserIndex];

  //   let friendId = userId;

  //   while (friendId === userId) {
  //     const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  //     friendId = createdUsers.ops[randomUserIndex];
  //   }

  //   await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
  // }

  // create products
  let createdProducts = [];
  for (let i = 0; i < 2; i += 1) {
    const brand = faker.lorem.words(Math.round(Math.random()) + 1);
    const price = faker.random.number({'min': 10, 'max': 100000});
    const condition = faker.lorem.words(Math.round(Math.random()) + 1);
    
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdProduct = await Product.create({ brand, condition, price, username });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { products: createdProduct._id } }
    );
      console.log(createdProduct)
    createdProducts.push(createdProduct);
  }

//   // create reactions
//   for (let i = 0; i < 100; i += 1) {
//     const reactionBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

//     const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
//     const { username } = createdUsers.ops[randomUserIndex];

//     const randomThoughtIndex = Math.floor(Math.random() * createdThoughts.length);
//     const { _id: thoughtId } = createdThoughts[randomThoughtIndex];

//     await Thought.updateOne(
//       { _id: thoughtId },
//       { $push: { reactions: { reactionBody, username } } },
//       { runValidators: true }
//     );
//   }

  console.log('all done!');
  process.exit(0);
});
