import { Db } from "mongodb";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { COLLECTIONS } from "../utils/database";
export class UserFunctions {
    constructor(private db: Db) { }

    async registerUser(req: Request, res: Response) {
        try {
            const { name, photo, phoneNum, address, identificationNumber, password } = req.body;
            const find = await this.db.collection(COLLECTIONS.USERS).findOne({ phoneNum });
            if (find) {
                res.status(400).send({ status: false, message: "Bad request" });
            }
            const hashed = await bcrypt.hash(password, 10);
            const resp = await this.db.collection("users").insertOne({ name, photo, phoneNum, address, identificationNumber, hashed });
            if (resp.insertedCount > 0) {
                res.status(200).send({ status: true, message: "successfully inserted", data: resp.insertedId });
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

    async loginUser(req: Request, res: Response) {
        try {
            const { phoneNum, password } = req.body;
            const find = await this.db.collection(COLLECTIONS.USERS).findOne({ phoneNum });
            if (!find) {
                res.status(404).send({ status: false, message: "User not found" });
                return;
            }
            const compare = await bcrypt.compare(password, find.hashed);
            if (!compare) {
                res.status(400).send({ status: false, message: "Unauthorized" });
                return;
            }
            const userDetailsToken = jwt.sign(find, "super-duper-secret");
            res.status(200).send({ status: true, message: "Signed in", data: userDetailsToken });
        } catch (err) {
            console.log(err);
            res.status(500).send({ status: false, message: "Error in Backend" });
        }

    }
}