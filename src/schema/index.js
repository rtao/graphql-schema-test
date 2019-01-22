import typeDefs from './schema.graphql';
import resolvers from './resolvers';

import { makeExecutableSchema } from 'graphql-tools'

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema, typeDefs, resolvers };
