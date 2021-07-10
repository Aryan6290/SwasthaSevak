import express from "express";
import { Db } from "mongodb";
import { Auth } from "../utils/auth";
import { HospitalFunctions } from "./hospitalFunctions";

export class HospitalRoutes {
    private funcs: HospitalFunctions;
    constructor(private db: Db) {
        this.funcs = new HospitalFunctions(db);
    }

    getRoutes() {
        const auth = new Auth().verifyToken;
        return express.Router()
            .get("", (req, res) => {
                this.funcs.getAllHospital(req, res);
            })
            .post("/bed", auth, (req, res) => {
                this.funcs.initializeBedCount(req, res);
            })
            .put("/bed", (req, res) => {
                this.funcs.updateBedCount(req, res);
            })
            .get("/:_id", (req, res) => {
                this.funcs.getHospital(req, res);
            })
    }
}
