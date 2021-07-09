import { Request, Response } from "express";
import jwt from "jsonwebtoken";
export class Auth {
    constructor() { }

    async verifyToken(req: Request, res: Response, next: any) {
        try {
            const bearerHeader = req.headers.authorization;

            if (typeof bearerHeader !== "undefined") {
                const bearer = bearerHeader.split(" ");

                const bearerToken = bearer[1];

                const decoded = jwt.verify(bearerToken, "super-duper-secret");
                res.locals.user = decoded;
                next();
            } else {
                res.status(403).send({ message: "forbidden" });
            }
        } catch (err) {
            res.status(403).send({ message: "forbidden" });
        }
    }
}
