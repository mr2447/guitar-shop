const epress = require('express');
const { SpolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas')
const db= require('./config/connection'); 
const path = require('path')

const PORT = process.env.PORT || 3001; 
const app =express();

// middleware
app.use(express.urlencoded({ extended: false }))
app .use(express.json())

//server
const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({app});

//setup static 
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname,"../client/build")))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'))
    });
}

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API is running on PORT: ${PORT}`);
    })
})