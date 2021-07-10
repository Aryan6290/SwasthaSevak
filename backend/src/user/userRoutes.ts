import express from "express";
import { Db } from "mongodb";
import { Auth } from "../utils/auth";
import { UserFunctions } from "./userFunctions";

export class UserRoutes {
    private funcs: UserFunctions;
    constructor(private db: Db) {
        this.funcs = new UserFunctions(db);
    }

    getRoutes() {
        const auth = (new Auth()).verifyToken;
        return express.Router()
            .post("/register", (req, res) => {
                this.funcs.registerUser(req, res);
            })
            .post("/login", (req, res) => {
                this.funcs.loginUser(req, res);
            });
    }
}
