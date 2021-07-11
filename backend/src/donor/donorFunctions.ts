import { Request, Response } from "express";
import { Db } from "mongodb";
import { COLLECTIONS } from "../utils/database";

export class DonorFunctions {
    constructor(private db: Db) {
    }

    async addDonor(req: Request, res: Response) {
        try {
            const userId = res.locals.user._id;
            const { blood, plasma, bloodDetails, plasmaDetails } = req.body;
            const resp = await this.db.collection(COLLECTIONS.DONORS).insertOne({ blood, plasma, bloodDetails, plasmaDetails });
            if (resp.insertedCount > 0) {
                res.status(200).send({ status: true, message: "added donor" });
            } else {
                res.status(400).send({ status: false, message: "couldnt create" });
            }
        } catch (err) {
            console.log(err);
            res.status(500).send({ status: false, message: "backend fail" });
        }
    }
}
