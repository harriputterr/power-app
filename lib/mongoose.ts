import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('⚠️ Please define the MONGODB_URI environment variable.');
}

// Define a custom global type for caching the connection
declare global {
  var mongooseCache: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

// Use or initialize the cache
let cached = globalThis.mongooseCache;

if (!cached) {
  cached = globalThis.mongooseCache = {
    conn: null,
    promise: null,
  };
}

async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: 'onboardingDB',
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
