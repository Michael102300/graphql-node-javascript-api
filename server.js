const express = require('express');
const {ApolloServer, gql} = require('apollo-server-express');
const cors = require('cors');
const donEnv = require('dotenv');

const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

donEnv.config();

const app = express();

app.use(cors());
app.use(express.json());


const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
})

apolloServer.applyMiddleware({app, path:'/graphql'})

const PORT = process.env.PORT || 3000;
app.use('/', (req,res, next) => {
    res.send({message: "Hello"});
});

app.listen(PORT, () => {
    console.log(`server listening in port: ${PORT}`)
})