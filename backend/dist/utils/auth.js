"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Auth {
    constructor() { }
    async verifyToken(req, res, next) {
        try {
            const bearerHeader = req.headers.authorization;
            if (typeof bearerHeader !== "undefined") {
                const bearer = bearerHeader.split(" ");
                const bearerToken = bearer[1];
                const decoded = jsonwebtoken_1.default.verify(bearerToken, "super-duper-secret");
                res.locals.user = decoded;
                next();
            }
            else {
                res.status(403).send({ message: "forbidden" });
            }
        }
        catch (err) {
            res.status(403).send({ message: "forbidden" });
        }
    }
}
exports.Auth = Auth;
