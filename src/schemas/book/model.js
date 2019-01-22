import mongoose, { mongo } from 'mongoose';

const { ObjectId } = mongoose.Schema.Types;

const BookSchema = new mongoose.Schema({
  name: String,
  author: [{ type: ObjectId, ref: 'Author' }]
});

const Book = mongoose.model('Book', BookSchema);

export {
  Book,
  BookSchema
}