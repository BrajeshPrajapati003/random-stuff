import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;

if (!uri) {
  throw new Error("❌ MONGODB_URI is not defined in environment variables");
}

const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

/**
 * In development mode, use a global variable so that the value
 * is preserved across module reloads caused by HMR (Hot Module Replacement).
 */
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
