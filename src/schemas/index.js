import { merge } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools'

import * as Author from './author'
import * as Book from './book';

const baseTypeDef = `
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  schema {
    query: Query
    mutation: Mutation
  }
`;

const typeDefs = [baseTypeDef, Author.typeDefs, Book.typeDefs];
const resolvers = merge(Author.resolvers, Book.resolvers);

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;