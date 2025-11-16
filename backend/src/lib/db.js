import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then((conn) => {
      console.log("mongodb connected    -=-=>" + conn.connection.host);
    })
    .catch((error) => {
      console.log("connection error in mongoose" + error);
    });
};
