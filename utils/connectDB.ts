import mongoose from "mongoose";
const connectDB = async () => {
  // const url:string = ;
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.mongodburl || "");
    console.log("Database Connected");
  } catch (e) {
    console.log({ e });
  }
};

export default connectDB;
