import mongoose from "mongoose";
const connectDB = async () => {
  const url: string = process.env.mongodburl || " ";

  console.log("mongo log", process.env.mongodburl);
  try {
    await mongoose.createConnection(url, () => {
      console.log("connected done");
    });
  } catch (e) {
    console.log({ e });
  }
};

export default connectDB;
