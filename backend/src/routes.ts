import { Router } from "express";
import { Db } from "mongodb";
import { UserRoutes } from "./user/userRoutes";
import { Database } from "./utils/database";

export class Routes {
    private router: Router;
    constructor() {
        this.router = Router();
        this.setupRoutes();
    }
    getRouter(): Router {
        return this.router;
    }
    async setupRoutes() {
        const db: Db = await new Database().connect();
        console.log("Db connected");
        this.router.use("/user", new UserRoutes(db).getRoutes());
    }
}
