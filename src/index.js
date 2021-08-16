//include express module or package
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const port = 4000;
// GraphQL's schema ‘Query’
const typeDefs = gql`
 type Query {
    hello: String
 }
`;
// create resolver functions for Query schema
const resolvers = {
 Query: {
    hello: () => 'Hello world!'
 }
};
//Create instance of express
const app = express();
//Create an instance of Apollo Server 
const server = new ApolloServer({ typeDefs, resolvers });
//Apply the Apollo GraphQL middleware and set the path to /api
server.applyMiddleware({ app, path: '/api' });
app.get('/', (req, res) => res.send('Hello World'));
app.listen({ port }, () =>
 console.log(
 `Server running at http://localhost:${port}`
 )
);