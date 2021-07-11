"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistributorRoutes = void 0;
const express_1 = __importDefault(require("express"));
const distributorFunctions_1 = require("./distributorFunctions");
class DistributorRoutes {
    constructor(db) {
        this.db = db;
        this.funcs = new distributorFunctions_1.DistributorFunctions(db);
    }
    getRoutes() {
        return express_1.default.Router()
            .get("", (req, res) => {
            this.funcs.getAllDistributor(req, res);
        })
            .get("/:_id", (req, res) => {
            this.funcs.getDistributor(req, res);
        });
    }
}
exports.DistributorRoutes = DistributorRoutes;
