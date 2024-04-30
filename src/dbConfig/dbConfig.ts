import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("mongodb connected successfully");
    });
    connection.on("error", (error) => {
      console.log("error in mongodb", error);
      process.exit();
    });
  } catch (error) {
    console.log("error in mongodb connection", error);
  }
}
