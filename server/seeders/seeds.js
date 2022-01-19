const faker = require('faker');

const db = require('../config/connection');
const { Product, User} = require('../models');

db.once('open', async () => {
  // await Category.deleteMany();
  await Product.deleteMany({});
  await User.deleteMany({});
  
  const userData = [];

  for (let i = 0; i < 1; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();
    // console.log({ username, email, password })
    userData.push({ username, email, password });
  }

const createdUsers = await User.collection.insertMany(userData);

  // create products
  let createdProducts = [];
  for (let i = 0; i < 2; i += 1) {
    const brand = faker.lorem.words(Math.round(Math.random()) + 1);
    const price = faker.random.number({'min': 10, 'max': 100000});
    const condition = faker.lorem.words(Math.round(Math.random()) + 1);
    const color = faker.lorem.words(Math.round(Math.random()) + 1);
    const publicID = "v1642417218/sample"
    
    // const category = categories[0]._id
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdProduct = await Product.create({ brand, condition, price, color, username, publicID});

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { products: createdProduct._id } }
    );
      console.log(createdProduct)
  
    createdProducts.push(createdProduct);
  }

  

  console.log('all done!');
  process.exit(0);
});
