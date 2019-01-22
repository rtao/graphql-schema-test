import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import connectMongo from './src/config';

import splitedSchemas from './src/schemas';
import * as SingleSchema from './src/schema';

connectMongo();

const { typeDefs, resolvers } = SingleSchema;

const server = new ApolloServer({
  schema: SingleSchema.schema
});

// const server = new ApolloServer({
//   schema: splitedSchemas
// });

// const server = new ApolloServer({
//   typeDefs,
//   resolvers
// });

const app = express();

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`Server is running on http://localhost:4000${server.graphqlPath}`)
);

module.exports = app;
