import mongoose from "mongoose";

const connectDB = async () => {
     mongoose.connection.once('open', () => {
       console.log("Connection established");
     });
     await mongoose.connect(`${process.env.MONGODB_URI}/tune`);
   };

export default connectDB;

   