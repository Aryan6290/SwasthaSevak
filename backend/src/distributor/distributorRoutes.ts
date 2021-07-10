import express from "express";
import { Db } from "mongodb";
import { DistributorFunctions } from "./distributorFunctions";


export class DistributorRoutes {
    private funcs: DistributorFunctions;
    constructor(private db: Db) {
        this.funcs = new DistributorFunctions(db);
    }

    getRoutes() {
        return express.Router()
            .get("", (req, res) => {
                this.funcs.getAllDistributor(req, res);
            })
            .get("/:_id", (req, res) => {
                this.funcs.getDistributor(req, res);
            })
    }
}
