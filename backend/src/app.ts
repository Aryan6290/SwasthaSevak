import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { Db } from "mongodb";
import { Database } from "./utils/database";
import { Routes } from "./routes";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use("/api", new Routes().getRouter());
app.get("/", (req, res) => {
    res.send("Something something");
});

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
})
