import { Author } from '../schemas/author';
import { Book } from '../schemas/book';

const resolvers = {
  Query: {
      authors: async () => Author.find({}).exec(),
      author: async (_, args) => {
        const {
          id
        } = args;
        return Author.findById(id).exec();
      },
      books: async () => Book.find({}).exec(),
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
      addAuthor: async (_, args) => {
        try {
          const {
            input
          } = args;
          return Author.create(input);
        } catch (e) {
          return e.message
        }
      },
    addBook: async (_, args) => {
      try {
        const {
          input
        } = args;
        return Book.create(input);
      } catch (e) {
        return e.message
      }
    }
    }
};

export default resolvers;