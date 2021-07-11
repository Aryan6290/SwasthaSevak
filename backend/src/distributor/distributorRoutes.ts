import express from "express";
import { Db } from "mongodb";
import { Auth } from "../utils/auth";
import { DistributorFunctions } from "./distributorFunctions";


export class DistributorRoutes {
    private funcs: DistributorFunctions;
    constructor(private db: Db) {
        this.funcs = new DistributorFunctions(db);
    }

    getRoutes() {
        const auth = new Auth().verifyToken
        return express.Router()
            .get("", (req, res) => {
                this.funcs.getAllDistributor(req, res);
            })
            .put("/approval", auth, (req, res) => {
                this.funcs.approveDistributor(req, res);
            })
            .get("/:_id", (req, res) => {
                this.funcs.getDistributor(req, res);
            })
    }
}
