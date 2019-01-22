import { Author } from './model';

const resolvers = {
  Query: {
    authors: async() => Author.find({}).exec(),
    author: async (_, args) => {
      const { id } = args;
      return Author.findById(id).exec();
    },
  },
  Mutation: {
    addAuthor: async (_, args) => {
      try {
        const { input } = args;
        return Author.create(input);
      } catch (e) {
        return e.message
      }
    }
  }
};

export default resolvers;