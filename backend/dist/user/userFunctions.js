"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFunctions = void 0;
const mongodb_1 = require("mongodb");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const database_1 = require("../utils/database");
class UserFunctions {
    constructor(db) {
        this.db = db;
    }
    async registerUser(req, res) {
        try {
            const { name, photo, phoneNum, address, identificationNumber, password } = req.body;
            const find = await this.db
                .collection(database_1.COLLECTIONS.USERS)
                .findOne({ phoneNum });
            if (find) {
                res.status(400).send({ status: false, message: "Bad request" });
            }
            const hashed = await bcrypt_1.default.hash(password, 10);
            const resp = await this.db.collection("users").insertOne({
                name,
                photo,
                phoneNum,
                address,
                identificationNumber,
                hashed,
            });
            if (resp.insertedCount > 0) {
                res.status(200).send({
                    status: true,
                    message: "successfully inserted",
                    data: resp.insertedId,
                });
            }
            else {
                res.status(400).send({ status: false, message: "Couldn't insert" });
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).send({ status: false, message: "Error in Backend" });
        }
    }
    async registerDistributor(req, res) {
        try {
            const { name, photo, phoneNum, address, gstin, password } = req.body;
            const distributor = await this.db
                .collection(database_1.COLLECTIONS.DISTRIBUTORS)
                .findOne({ phoneNum });
            if (distributor) {
                res.status(400).send({ status: false, message: "Bad Request" });
                return;
            }
            const hashed = await bcrypt_1.default.hash(password, 10);
            const resp = await this.db.collection("distributors").insertOne({
                name,
                photo,
                phoneNum,
                address,
                gstin,
                hashed,
                status: "pending"
            });
            if (resp.insertedCount > 0) {
                res.status(200).send({
                    status: true,
                    message: "successfully inserted",
                    data: resp.insertedId,
                });
            }
            else {
                res.status(400).send({ status: false, message: "Couldn't insert" });
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).send({ status: false, message: "Error in Backend" });
        }
    }
    async registerHospital(req, res) {
        try {
            const { name, phoneNum, address, email, password } = req.body;
            const distributor = await this.db
                .collection(database_1.COLLECTIONS.HOSPITALS)
                .findOne({ phoneNum });
            if (distributor) {
                res.status(400).send({ status: false, message: "Bad Request" });
                return;
            }
            const hashed = await bcrypt_1.default.hash(password, 10);
            const resp = await this.db.collection("distributors").insertOne({
                name,
                phoneNum,
                email,
                address,
                hashed,
                status: "pending"
            });
            if (resp.insertedCount > 0) {
                res.status(200).send({
                    status: true,
                    message: "successfully inserted",
                    data: resp.insertedId,
                });
            }
            else {
                res.status(400).send({ status: false, message: "Couldn't insert" });
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).send({ status: false, message: "Error in Backend" });
        }
    }
    async getHospital(req, res) {
        try {
            const { _id } = req.body;
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
    async loginUser(req, res) {
        try {
            const { userType, phoneNum, password } = req.body;
            let collection = "";
            if (userType == "user")
                collection = database_1.COLLECTIONS.USERS;
            if (userType == "hospital")
                collection = database_1.COLLECTIONS.HOSPITALS;
            if (userType == "distributor")
                collection = database_1.COLLECTIONS.DISTRIBUTORS;
            const find = await this.db
                .collection(collection)
                .findOne({ phoneNum });
            if (!find) {
                res.status(404).send({ status: false, message: "User not found" });
                return;
            }
            const compare = await bcrypt_1.default.compare(password, find.hashed);
            if (!compare) {
                res.status(400).send({ status: false, message: "Unauthorized" });
                return;
            }
            const userDetailsToken = jsonwebtoken_1.default.sign(find, "super-duper-secret");
            res
                .status(200)
                .send({ status: true, message: "Signed in", data: userDetailsToken });
        }
        catch (err) {
            console.log(err);
            res.status(500).send({ status: false, message: "Error in Backend" });
        }
    }
    async getDetails(req, res) {
        try {
            const user = res.locals.user;
            res.status(200).send({ status: true, message: "success", data: user });
        }
        catch (err) {
            console.log(err);
            res.status(500).send({ status: false, message: "Error in Backend" });
        }
    }
}
exports.UserFunctions = UserFunctions;
