import Express from "express";
import { Commontroller } from "../controller/common.controller.js";

const CommonRouter = Express.Router();
const Controller = new Commontroller();

CommonRouter.post("/generatepassword", Controller.generatePasswords());
CommonRouter.post("/generateUserpassword", Controller.generatePasswordfromUser());
CommonRouter.delete("/deletegeneratepassword", Controller.deleteGeneratedPassword());


export { CommonRouter };