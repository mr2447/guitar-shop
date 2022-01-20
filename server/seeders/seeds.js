// const faker = require('faker');

const db = require('../config/connection');
const { Product, User} = require('../models');

db.once('open', async () => {
  // await Category.deleteMany();
  await Product.deleteMany();
     
  //  const products = await Product.insertMany([
  //   {
  //     brand:"Gibson",
  //     price:800,
  //     condition:"New",
  //     color:"sun_burst",
  //     publicID:"v1642563102/seed_Standard_60s_Quilt_emwwes_red_sun_burst"
  //   },
  //   {
  //     brand:"Gibson",
  //     price:800,
  //     condition:"New",
  //     color:"blue",
  //     publicID:"v1642563343/seed_Les_Paul_Special-I_Limited-Edition_ab0znx_blue"
  //   },
  //   {
  //     brand:"Gibson",
  //     price:800,
  //     condition:"New",
  //     color:"orange",
  //     publicID:"v1642563383/seed_Emperor_Swingster_ytgnz8_orange"
  //   },
  //   {
  //     brand:"Gibson",
  //     price:800,
  //     condition:"New",
  //     color:"wood",
  //     publicID:"v1642563436/seed_Inspired_by_Gibson_J-200_ezqaqk_wood"
  //   },
  //   {
  //     brand:"Gibson",
  //     price:800,
  //     condition:"New",
  //     color:"green",
  //     publicID:"v1642563477/seed_Casino_Worn_kl330v_green"
  //   },
  //   {
  //     brand:"Martin",
  //     price:900.00,
  //     condition:"New",
  //     color:"black",
  //     publicID:"v1642564166/seed_Special_X_Series_Style_000_zaud1t_black"
  //   },
  //   {
  //     brand:"Martin",
  //     price:1800.00,
  //     condition:"New",
  //     color:"wood",
  //     publicID:"v1642564123/seed_D-10E_Road_Series_c0j30u_natrual_wood"
  //   },
  //   {
  //     brand:"Martin",
  //     price:2800.00,
  //     condition:"New",
  //     color:"yellow",
  //     publicID:"v1642564250/seed_Special_16_Style_Rosewood_d3p241_yellow"
  //   },
  //   {
  //     brand:"Gibson",
  //     price:300.00,
  //     condition:"New",
  //     color:"red",
  //     publicID:"v1642564412/seed_ES-335_Figured_Semi-Hollow_us61ql_red"
  //   },
  //   {
  //     brand:"Martin",
  //     price:1800.00,
  //     condition:"New",
  //     color:"Yellow",
  //     publicID:"v1642564250/seed_Special_16_Style_Rosewood_d3p241_yellow"
  //   },
  //   {
  //     brand:"PRS",
  //     price:900.00,
  //     condition:"New",
  //     color:"pink",
  //     publicID:"v1642565042/seed_John_Mayer_ghh3rw_pink"
  //   },
  //   {
  //     brand:"PRS",
  //     price:1900.00,
  //     condition:"New",
  //     color:"orange",
  //     publicID:"v1642565095/seed_McCarty_594_vxrjus_orange"
  //   },
  //   {
  //     brand:"PRS",
  //     price:2800.00,
  //     condition:"New",
  //     color:"red",
  //     publicID:"v1642565163/seed_SE_Silver_e16him_red"
  //   },
  //   {
  //     brand:"Gibson",
  //     price:300.00,
  //     condition:"New",
  //     color:"blue",
  //     publicID:"v1642564373/seed_Les_Paul_Traditional_owy66u_blue"
  //   },
  //   {
  //     brand:"Gibson",
  //     price:1800.00,
  //     condition:"New",
  //     color:"red",
  //     publicID:"v1642564412/seed_ES-335_Figured_Semi-Hollow_us61ql_red"
  //   },
  //   {
  //     brand:"Taylor",
  //     price:900.00,
  //     condition:"New",
  //     color:"wood",
  //     publicID:"v1642565235/seed_GS_Mini-e_Koa_rum3fa_natrual_wood"
  //   },
  //   {
  //     brand:"Taylor",
  //     price:1800.00,
  //     condition:"New",
  //     color:"blue",
  //     publicID:"v1642565273/seed_T5z_Pro_kdfue0_blue"
  //   },
  //   {
  //     brand:"Taylor",
  //     price:2800.00,
  //     condition:"New",
  //     color:"red",
  //     publicID:"v1642565307/seed_Custom_Grand_Orchestra_mh1y6u_red_wood"
  //   },
  //   {
  //     brand:"Gretsch",
  //     price:1200.00,
  //     condition:"New",
  //     color:"White",
  //     publicID:"v1642564794/seed_G2627T_ogc2kt_white"
  //   },
  //   {
  //     brand:"Ibanez",
  //     price:1800.00,
  //     condition:"New",
  //     color:"White",
  //     publicID:"v1642564895/seed_GRGM21M_o24igo_white",
  //     username:user.username[0]
  //   }
    
  // ]);
  await User.deleteMany();

  

//  const user =({
//     username:"mike123",
//     email:"mike.m@me.com",
//     password:"password1234"
//   },
//   {
//     username:"john123",
//     email:"john.m@me.com",
//     password:"password1234"
//   },
//   {
//     username:"jane123",
//     email:"jane.m@me.com",
//     password:"password1234"
//   }
//   );

  
 




  const userData = [];

  for (let i = 0; i< 1; i += 1) {
    const username = "mike123";
    const email = "mike@getMaxListeners.com";
    const password = "password123";
    // const orders = [
    //   {
    //     Product:[Product[0]._id]
    //   }
    // ]
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
  for (let i = 0; i < 1; i += 1) {
    const brand = "Gibson";
    const price = 1000;
    const condition = "new";
    const color = "black";
    const publicID = "v1642564314/seed_60s_J-45_Original_Acoustic_vb1szz_black";
    
    // const category = categories[0]._id
    // const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[0];

    const createdProduct = await Product.create({ brand, condition, price,color, username, publicID});

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { products: createdProduct._id } }
    );
      console.log(createdProduct)
  
    createdProducts.push(createdProduct);
    }
  //   // create images
  //   for (let i = 0; i < 100; i += 1) {
  //     const image = faker.lorem.words(Math.round(Math.random() * 20) + 1);
  
  //     const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  //     const { username } = createdUsers.ops[randomUserIndex];
  
  //     const randomProductIndex = Math.floor(Math.random() * createdProducts.length);
  //     const { _id: productId } = createdProducts[randomProductIndex];
  
  //     await Product.updateOne(
  //       { _id: productId },
  //       { $push: { images: { image, username } } },
  //       { runValidators: true }
  //     );
  //   }

  

  console.log('all done!');
  process.exit(0);
});
