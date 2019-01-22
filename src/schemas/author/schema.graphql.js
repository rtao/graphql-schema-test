const typeDefs = `
  type Author {
    id: ID!
    name: String
  }

  extend type Query {
    authors: [Author]
    author(id: ID!): Author
  }

  input AddAuthorInput {
    name: String!
  }

  extend type Mutation {
    addAuthor(input: AddAuthorInput): Author
  }
`;

export default typeDefs;