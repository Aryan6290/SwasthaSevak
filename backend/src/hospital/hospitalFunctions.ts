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
                .find({ status: "approved" }).toArray();

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

}
