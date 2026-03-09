import mongoose from "mongoose";

const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/${process.env.DBNAME}?retryWrites=true&w=majority`;

export async function connect() {
  await mongoose.connect(dbUrl, { maxPoolSize: 5, minPoolSize: 2 });
}