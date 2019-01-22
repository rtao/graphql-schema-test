const typeDefs = `
  type Book {
    id: ID!
    name: String
    author: Author
  }

  extend type Query {
    books: [Book]
    book(id: ID!): Book
  }

  input AddBookInput {
    name: String!
    author: ID!
  }

  extend type Mutation {
    addBook(input: AddBookInput): Book
  }
`;

export default typeDefs;