import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.DATABASECONNECTIONSTRING;

async function DatabaseCon() {
  try {
    await mongoose.connect(connectionString);
    console.log("successfully connected to database");
  } catch (err) {
    console.log("failed to connect to database", err);
  }
}

export default DatabaseCon;
