import express from "express";
import { Db } from "mongodb";
import { HospitalFunctions } from "./hospitalFunctions";

export class HospitalRoutes {
    private funcs: HospitalFunctions;
    constructor(private db: Db) {
        this.funcs = new HospitalFunctions(db);
    }

    getRoutes() {
        return express.Router()
            .get("", (req, res) => {
                this.funcs.getAllHospital(req, res);
            })
            .get("/:_id", (req, res) => {
                this.funcs.getHospital(req, res);
            })
    }
}
