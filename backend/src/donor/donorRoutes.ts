import express from "express";
import { Db } from "mongodb";
import { Auth } from "../utils/auth";
import { DonorFunctions } from "./donorFunctions";

export class DonorRoutes {
    private funcs: DonorFunctions;
    constructor(private db: Db) {
        this.funcs = new DonorFunctions(db);
    }

    getRoutes() {
        const auth = new Auth().verifyToken;
        return express.Router()
            .post("", auth, (req, res) => {
                this.funcs.addDonor(req, res);
            })
    }
}
