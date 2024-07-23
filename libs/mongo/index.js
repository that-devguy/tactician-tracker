const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

let db;

async function connectToDatabase() {
  if (!db) {
    try {
      await client.connect();
      db = client.db("tft_leaderboard");
      console.log("Connected to database");
    } catch (error) {
      console.error("Failed to connect to database", error);
      throw error;
    }
  }
  return db;
}

module.exports = { connectToDatabase };
