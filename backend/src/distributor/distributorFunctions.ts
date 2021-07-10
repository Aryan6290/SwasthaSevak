import { Db, ObjectId } from "mongodb";
import { COLLECTIONS } from "../utils/database";
import { Request, Response } from "express";

export class DistributorFunctions {
    constructor(private db: Db) { }

    async getDistributor(req: Request, res: Response) {
        try {
            const { _id } = req.params;
            const dist = await this.db
                .collection(COLLECTIONS.DISTRIBUTORS)
                .findOne({ _id: new ObjectId(_id) });
            if (dist) {
                res.status(200).send({ status: true, message: "successs", data: dist });
            } else {
                res
                    .status(404)
                    .send({ status: false, message: "Nothing found" });
            }
        } catch (err) {
            console.log(err);
            res.status(500).send({ status: false, message: "Error in Backend" });
        }
    }

    //Get All hospital
    async getAllDistributor(req: Request, res: Response) {
        try {
            const distributor = await this.db
                .collection(COLLECTIONS.DISTRIBUTORS)
                .find({ status: req.query.status }).toArray();
            if (distributor) {
                res.status(200).send({ status: true, message: "success", data: distributor });
            } else {
                res
                    .status(404)
                    .send({
                        status: false,
                        message: "Nothing found",
                    });
            }
        } catch (err) {
            console.log(err);
            res.status(500).send({ status: false, message: "Error in Backend" });
        }
    }

    async approveDistributor(req: Request, res: Response) {
        try {
            const user = res.locals.user;
            if (user.name != "admin") {
                res.status(400).send({ status: false, message: "forbidden" });
                return;
            }
            const distributorId = req.body.distributorId;
            const update = await this.db.collection(COLLECTIONS.DISTRIBUTORS).updateOne({ _id: new ObjectId(distributorId) }, { $set: { status: "approved" } });
            if (update.modifiedCount > 0) {
                res.status(200).send({ status: true, message: "approved" });
            } else {
                res.status(400).send({ status: false, message: "couldn't approve" });
            }
        } catch (err) {
            console.log(err);
            res.status(500).send({ status: false, message: "Error in Backend" });
        }
    }
}
