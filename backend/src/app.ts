import cors from "cors";
import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Something something");
});
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
})
