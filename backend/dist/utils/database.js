"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLLECTIONS = exports.Database = void 0;
const mongodb_1 = require("mongodb");
class Database {
    constructor() {
        this.url = "mongodb+srv://debadree:9883362850@cluster0.5meyd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
        this.dbname = "codespirants";
        this.client = new mongodb_1.MongoClient(this.url);
    }
    async connect() {
        try {
            if (!this.client || !this.client.isConnected()) {
                this.client = await mongodb_1.MongoClient.connect(this.url, {
                    useUnifiedTopology: true,
                });
            }
        }
        catch (err) {
            console.log(err);
        }
        return this.client.db(this.dbname);
    }
}
exports.Database = Database;
exports.COLLECTIONS = {
    USERS: "users",
    DISTRIBUTORS: "distributors",
    HOSPITALS: "hospitals"
};
