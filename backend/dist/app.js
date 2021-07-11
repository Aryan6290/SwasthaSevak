"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes");
const app = express_1.default();
dotenv_1.default.config();
const PORT = process.env.PORT || 4000;
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.use("/api", new routes_1.Routes().getRouter());
app.get("/", (req, res) => {
    res.send("Something something");
});
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});
