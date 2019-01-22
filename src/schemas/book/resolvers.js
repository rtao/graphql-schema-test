import { Book } from './model';

const resolvers = {
  Query: {
    books: async() => Book.find({}).exec(),
    book: async (_, args) => {
      const { id } = args;
      const result = await Book.findById(id).populate('author').exec();

      console.warn('====== Book query result ======');
      console.log(JSON.stringify(result, null, 2));
      console.warn('====== End Book query result ======');

      return result;
    },
  },
  Mutation: {
    addBook: async (_, args) => {
      try {
        const { input } = args;
        return Book.create(input);
      } catch (e) {
        return e.message
      }
    }
  }
};

export default resolvers;