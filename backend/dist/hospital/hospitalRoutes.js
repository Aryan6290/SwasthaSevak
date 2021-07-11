"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalRoutes = void 0;
const express_1 = __importDefault(require("express"));
const hospitalFunctions_1 = require("./hospitalFunctions");
class HospitalRoutes {
    constructor(db) {
        this.db = db;
        this.funcs = new hospitalFunctions_1.HospitalFunctions(db);
    }
    getRoutes() {
        return express_1.default.Router()
            .get("", (req, res) => {
            this.funcs.getAllHospital(req, res);
        })
            .get("/:_id", (req, res) => {
            this.funcs.getHospital(req, res);
        });
    }
}
exports.HospitalRoutes = HospitalRoutes;
