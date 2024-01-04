import Express from "express";
import { AuthController } from "../controller/auth.controller.js";
import { Middleware } from "../midleware/auth.middleware.js";


const UserRouter = Express.Router();
const Controller = new AuthController();


UserRouter.post("/signup", Controller.signup());
UserRouter.post("/login", Controller.login());
UserRouter.get("/decode", Controller.decodeToken());
UserRouter.post("/update", [Middleware.loginCheck], Controller.updateUser());
UserRouter.post("/delete", [Middleware.loginCheck], Controller.deleteUser());
UserRouter.get("/get-all", Controller.getAllUsers());
UserRouter.get("/get-by-id", Controller.getUserById());



export { UserRouter };