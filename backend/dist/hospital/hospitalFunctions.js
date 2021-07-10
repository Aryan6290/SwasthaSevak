"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalFunctions = void 0;
const mongodb_1 = require("mongodb");
const database_1 = require("../utils/database");
class HospitalFunctions {
    constructor(db) {
        this.db = db;
    }
    async getHospital(req, res) {
        try {
            const { _id } = req.params;
            const hospital = await this.db
                .collection(database_1.COLLECTIONS.HOSPITALS)
                .findOne({ _id: new mongodb_1.ObjectId(_id) });
            if (hospital) {
                res.status(200).send({ status: true, message: "successs", data: hospital });
            }
            else {
                res
                    .status(404)
                    .send({ status: false, message: "No such hospital exists" });
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).send({ status: false, message: "Error in Backend" });
        }
    }
    async getAllHospital(req, res) {
        try {
            const hospital = await this.db
                .collection(database_1.COLLECTIONS.HOSPITALS)
                .find({ status: "approved" }).toArray();
            if (hospital) {
                res.status(200).send({ status: true, message: "success", data: hospital });
            }
            else {
                res
                    .status(404)
                    .send({
                    status: false,
                    message: "No hospital till now has been approved",
                });
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).send({ status: false, message: "Error in Backend" });
        }
    }
}
exports.HospitalFunctions = HospitalFunctions;
