"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistributorFunctions = void 0;
const mongodb_1 = require("mongodb");
const database_1 = require("../utils/database");
class DistributorFunctions {
    constructor(db) {
        this.db = db;
    }
    async getDistributor(req, res) {
        try {
            const { _id } = req.params;
            const dist = await this.db
                .collection(database_1.COLLECTIONS.DISTRIBUTORS)
                .findOne({ _id: new mongodb_1.ObjectId(_id) });
            if (dist) {
                res.status(200).send({ status: true, message: "successs", data: dist });
            }
            else {
                res
                    .status(404)
                    .send({ status: false, message: "Nothing found" });
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).send({ status: false, message: "Error in Backend" });
        }
    }
    async getAllDistributor(req, res) {
        try {
            const distributor = await this.db
                .collection(database_1.COLLECTIONS.HOSPITALS)
                .find({ status: req.query.status }).toArray();
            if (distributor) {
                res.status(200).send({ status: true, message: "success", data: distributor });
            }
            else {
                res
                    .status(404)
                    .send({
                    status: false,
                    message: "Nothing found",
                });
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).send({ status: false, message: "Error in Backend" });
        }
    }
}
exports.DistributorFunctions = DistributorFunctions;
