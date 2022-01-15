const express = require('express');
// import ApolloServer
const { ApolloServer } = require('apollo-server-express');

//import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// require mongoose model for image 
const imgModel = require('./models')
//upload and retrieve images 
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')

// //set up multer to store uploaded files
// const multer = require('multer')

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads')
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.filename + '-' + Date.now())
//   }
// });

// const upload = multer({ storage: storage });

// //set up get request 
// app.get('/', (req, res ) => {
//   imgModel.find({}, (err, items) => {
//     if(err) {
//       console.log(err);
//       res.status(500).send('An error occured', err);
//     }
//     else {
//       res.render('imagePage', { items: items })
//     }
//   })
// })

// // set up Post request 
// app.post('/', upload.single('image'), (req, res, next) => {
  
//   var obj = {
//       name: req.body.name,
//       desc: req.body.desc,
//       img: {
//           data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
//           contentType: 'image/png'
//       }
//   }
//   imgModel.create(obj, (err, item) => {
//       if (err) {
//           console.log(err);
//       }
//       else {
//           // item.save();
//           res.redirect('/');
//       }
//   });
// });

const startServer = async () => {
  //create a new Apollo server and pass in our schema data
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  //Start the Apollo server
  await server.start();

  //integrate our Apollo server with the Express application as middleware
  server.applyMiddleware({ app });

  //log where we can go to test our GQL API
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
};

//Initialize the APollo server
startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.set("view engine", "ejs")

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
