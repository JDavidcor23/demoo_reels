import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;

const MONGODB_URI = `mongodb+srv://${USER}:${PASSWORD}@database-demoo-reel.oz1rbel.mongodb.net/test`;

connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });
