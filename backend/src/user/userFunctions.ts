import { Db } from "mongodb";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { COLLECTIONS } from "../utils/database";
export class UserFunctions {
  constructor(private db: Db) { }

  async registerUser(req: Request, res: Response) {
    try {
      const { name, photo, phoneNum, address, identificationNumber, password } =
        req.body;
      const find = await this.db
        .collection(COLLECTIONS.USERS)
        .findOne({ phoneNum });
      if (find) {
        res.status(400).send({ status: false, message: "Bad request" });
      }
      const hashed = await bcrypt.hash(password, 10);
      const resp = await this.db.collection("users").insertOne({
        name,
        photo,
        phoneNum,
        address,
        identificationNumber,
        hashed,
      });
      if (resp.insertedCount > 0) {
        res.status(200).send({
          status: true,
          message: "successfully inserted",
          data: resp.insertedId,
        });
      } else {
        res.status(400).send({ status: false, message: "Couldn't insert" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ status: false, message: "Error in Backend" });
    }
  }
  // Register Distributor Function
  async registerDistributor(req: Request, res: Response) {
    try {
      const { name, photo, phoneNum, address, gstin, password } = req.body;
      const distributor = await this.db
        .collection(COLLECTIONS.DISTRIBUTORS)
        .findOne({ phoneNum });
      if (distributor) {
        res.status(400).send({ status: false, message: "Bad Request" });
        return;
      }
      const hashed = await bcrypt.hash(password, 10);
      const resp = await this.db.collection("distributors").insertOne({
        name,
        photo,
        phoneNum,
        address,
        gstin,
        hashed,
        status: "pending"
      });

      if (resp.insertedCount > 0) {
        res.status(200).send({
          status: true,
          message: "successfully inserted",
          data: resp.insertedId,
        });
      } else {
        res.status(400).send({ status: false, message: "Couldn't insert" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ status: false, message: "Error in Backend" });
    }
  }

  async registerHospital(req: Request, res: Response) {
    try {
      const { name, phoneNum, address, email, password } = req.body;
      const distributor = await this.db
        .collection(COLLECTIONS.HOSPITALS)
        .findOne({ phoneNum });
      if (distributor) {
        res.status(400).send({ status: false, message: "Bad Request" });
        return;
      }
      const hashed = await bcrypt.hash(password, 10);
      const resp = await this.db.collection("distributors").insertOne({
        name,
        phoneNum,
        email,
        address,
        hashed,
        status: "pending"
      });

      if (resp.insertedCount > 0) {
        res.status(200).send({
          status: true,
          message: "successfully inserted",
          data: resp.insertedId,
        });
      } else {
        res.status(400).send({ status: false, message: "Couldn't insert" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ status: false, message: "Error in Backend" });
    }
  }

  async getHospital(req: Request, res: Response) {
    try {
      const { id } = req.body;
      const hospital = await this.db
        .collection(COLLECTIONS.HOSPITALS)
        .findOne({ id });
      if (hospital.insertedCount > 0) {
        res.json(hospital).status(200);
      } else {
        res
          .status(200)
          .send({ status: false, message: "No such hospital exists" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ status: false, message: "Error in Backend" });
    }
  }

  async loginUser(req: Request, res: Response) {
    try {
      const { userType, phoneNum, password } = req.body;
      let collection = "";
      if (userType == "user") collection = COLLECTIONS.USERS;
      if (userType == "hospital") collection = COLLECTIONS.HOSPITALS;
      if (userType == "distributor") collection = COLLECTIONS.DISTRIBUTORS;
      const find = await this.db
        .collection(collection)
        .findOne({ phoneNum });
      if (!find) {
        res.status(404).send({ status: false, message: "User not found" });
        return;
      }
      const compare = await bcrypt.compare(password, find.hashed);
      if (!compare) {
        res.status(400).send({ status: false, message: "Unauthorized" });
        return;
      }
      const userDetailsToken = jwt.sign(find, "super-duper-secret");
      res
        .status(200)
        .send({ status: true, message: "Signed in", data: userDetailsToken });
    } catch (err) {
      console.log(err);
      res.status(500).send({ status: false, message: "Error in Backend" });
    }
  }

  async getDetails(req: Request, res: Response) {
    try {
      const user = res.locals.user;
      res.status(200).send({ status: true, message: "success", data: user });
    } catch (err) {
      console.log(err);
      res.status(500).send({ status: false, message: "Error in Backend" });
    }
  }
}
