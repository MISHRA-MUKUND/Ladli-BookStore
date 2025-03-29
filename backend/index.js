import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRouter from "./route/book.route.js";
import cors from "cors"
import signupRouter from "./route/signup.route.js";
import loginRouter from "./route/login.route.js"

const app = express();
app.use(cors());
app.use(express.json());
//setting port and uri
dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;


// Connecting to the database with proper error handling
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.error("MongoDB connection error:", error));
  //routes
  app.use("/book",bookRouter);
  app.use("/signup",signupRouter);
  app.use("/login",loginRouter);
// Start the server
app.listen(PORT, () => {
  console.log(`Your server is listening on port: ${PORT}`);
});
