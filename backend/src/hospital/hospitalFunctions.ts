import { Db, ObjectId } from "mongodb";
import { COLLECTIONS } from "../utils/database";
import { Request, Response } from "express";

export class HospitalFunctions {
    constructor(private db: Db) { }

    async getHospital(req: Request, res: Response) {
        try {
            const { _id } = req.params;
            const hospital = await this.db
                .collection(COLLECTIONS.HOSPITALS)
                .findOne({ _id: new ObjectId(_id) });
            if (hospital) {
                res.status(200).send({ status: true, message: "successs", data: hospital });
            } else {
                res
                    .status(404)
                    .send({ status: false, message: "No such hospital exists" });
            }
        } catch (err) {
            console.log(err);
            res.status(500).send({ status: false, message: "Error in Backend" });
        }
    }

    //Get All hospital
    async getAllHospital(req: Request, res: Response) {
        try {
            const hospital = await this.db
                .collection(COLLECTIONS.HOSPITALS)
                .find({ status: req.query.status }).toArray();

            if (hospital) {
                res.status(200).send({ status: true, message: "success", data: hospital });
            } else {
                res
                    .status(404)
                    .send({
                        status: false,
                        message: "No hospital till now has been approved",
                    });
            }
        } catch (err) {
            console.log(err);
            res.status(500).send({ status: false, message: "Error in Backend" });
        }
    }

    async initializeBedCount(req: Request, res: Response) {
        try {
            const hospitalId = res.locals.user._id;
            const { bedCount } = req.body;
            const find = await this.db.collection(COLLECTIONS.HOSPITALS).findOne({ _id: new ObjectId(hospitalId) });
            if (!find) {
                res.status(404).send({ status: false, message: "Hospital not found" });
                return;
            }
            const insert = await this.db.collection(COLLECTIONS.BEDS).insertOne({ hospitalId, bedCount });
            if (insert.insertedCount > 0) {
                res.status(200).send({ status: true, message: "beds created" });
            } else {
                res.status(400).send({ status: false, message: "data cant be inserted" });
            }
        } catch (err) {
            console.log(err);
            res.status(500).send({ status: false, message: "Error in Backend" });
        }
    }

    async updateBedCount(req: Request, res: Response) {
        try {
            const hospitalId = new ObjectId(res.locals.user._id);
            const { newCount } = req.body;
            const update = await this.db.collection(COLLECTIONS.BEDS).updateOne({ hospitalId }, { $set: { bedCount: newCount } });
            if (update.modifiedCount > 0) {
                res.status(200).send({ status: true, message: "count updated" });
            } else {
                res.status(400).send({ status: false, message: "couldnt update" });
            }
        } catch (err) {
            console.log(err);
            res.status(500).send({ status: false, message: "Error in Backend" });
        }
    }

    async approveHospital(req: Request, res: Response) {
        try {
            const user = res.locals.user;
            if (user.name != "admin") {
                res.status(400).send({ status: false, message: "forbidden" });
                return;
            }
            const hospitalId = req.body.hospitalId;
            const update = await this.db.collection(COLLECTIONS.HOSPITALS).updateOne({ _id: new ObjectId(hospitalId) }, { $set: { status: "approved" } });
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

    async getBeds(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const data = this.db.collection(COLLECTIONS.BEDS).findOne({ _id: new ObjectId(id) });
            res.status(200).send({ status: true, message: "found", data });
        } catch (err) {
            console.log(err);
            res.status(500).send({ status: false, message: "Error in Backend" });
        }
    }
}
