"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const express_1 = require("express");
const hospitalRoutes_1 = require("./hospital/hospitalRoutes");
const userRoutes_1 = require("./user/userRoutes");
const database_1 = require("./utils/database");
class Routes {
    constructor() {
        this.router = express_1.Router();
        this.setupRoutes();
    }
    getRouter() {
        return this.router;
    }
    async setupRoutes() {
        const db = await new database_1.Database().connect();
        console.log("Db connected");
        this.router
            .use("/user", new userRoutes_1.UserRoutes(db).getRoutes())
            .use("/hospital", new hospitalRoutes_1.HospitalRoutes(db).getRoutes());
    }
}
exports.Routes = Routes;
