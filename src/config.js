import Mongoose from 'mongoose';

const connectMongo = () => {
  Mongoose.Promise = global.Promise;

  const url = 'mongodb://localhost:27017/test';

  Mongoose.connect(url, {
    useNewUrlParser: true,
  });
  Mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));
};

export default connectMongo;
