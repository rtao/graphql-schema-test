const typeDefs = `
  type Author {
    id: ID!
    name: String
  }

  type Book {
    id: ID!
    name: String
    author: Author
  }

  type Query {
    authors: [Author]
    author(id: ID!): Author
    books: [Book]
    book(id: ID!): Book
  }

  input AddAuthorInput {
    name: String!
  }

  input AddBookInput {
    name: String!
    author: ID!
  }

  type Mutation {
    addAuthor(input: AddAuthorInput): Author
    addBook(input: AddBookInput): Book
  }
`;

export default typeDefs;