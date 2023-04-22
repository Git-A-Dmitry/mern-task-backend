import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);

    // console.log(`Mongo connected: ${connect.connection.host}`);
    console.log(`Mongo connected`);
  } catch (error) {
    console.log('An error ocurred');
    process.exit(1);
  }
};

export default connectDB;
