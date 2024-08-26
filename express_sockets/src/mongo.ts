import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";
const mongoClient = new MongoClient(uri);

async function connectToDatabase() {
  const conn = await mongoClient.connect();
  return conn.db("test");
}

export const testDbPromise = connectToDatabase();
