import mongoose from 'mongoose';

const AuthorSchema = new mongoose.Schema({
  name: String
});

const Author = mongoose.model('Author', AuthorSchema);

export { Author, AuthorSchema }