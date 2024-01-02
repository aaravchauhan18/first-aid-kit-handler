import express from "express";
import { create, deleteMedicine, getAll, getOne, update } from "../controller/medicineController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getall", getAll);
route.get("/getone/:id", getOne);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteMedicine);

export default route;