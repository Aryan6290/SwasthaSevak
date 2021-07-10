import { Db, MongoClient } from "mongodb";

export class Database {
  private url =
    "mongodb+srv://debadree:9883362850@cluster0.5meyd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  private dbname = "codespirants";
  private client = new MongoClient(this.url);
  constructor() { }
  async connect(): Promise<Db> {
    try {
      if (!this.client || !this.client.isConnected()) {
        this.client = await MongoClient.connect(this.url, {
          useUnifiedTopology: true,
        });
      }
    } catch (err) {
      console.log(err);
    }
    return this.client.db(this.dbname);
  }
}

export const COLLECTIONS = {
  USERS: "users",
  DISTRIBUTORS: "distributors",
  HOSPITALS: "hospitals",
  BEDS: "beds"
};
