"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../utils/auth");
const userFunctions_1 = require("./userFunctions");
class UserRoutes {
    constructor(db) {
        this.db = db;
        this.funcs = new userFunctions_1.UserFunctions(db);
    }
    getRoutes() {
        const auth = (new auth_1.Auth()).verifyToken;
        return express_1.default.Router()
            .post("/register/user", (req, res) => {
            this.funcs.registerUser(req, res);
        })
            .post("/register/hospital", (req, res) => {
            this.funcs.registerHospital(req, res);
        })
            .post("/register/distributor", (req, res) => {
            this.funcs.registerDistributor(req, res);
        })
            .post("/login", (req, res) => {
            this.funcs.loginUser(req, res);
        })
            .get("", auth, (req, res) => {
            this.funcs.getDetails(req, res);
        });
    }
}
exports.UserRoutes = UserRoutes;
