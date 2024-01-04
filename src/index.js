import express from "express";
import dotenv from "dotenv";
import { connect } from "./config/database.config.js";
import { UserRouter } from "./routes/user.router.js";
import { CommonRouter } from "./routes/common.routes.js";
import { Middleware } from "./midleware/auth.middleware.js";
import cors from "cors";

dotenv.config();

connect();
const App = express();

App.use(cors());

App.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
App.use(express.urlencoded({ extended: true }));
App.use(express.json());

App.use("/api", UserRouter);
App.use("/api/common", [Middleware.loginCheck], CommonRouter);

App.all("/", (req, res) => {
    res.json({
        message: "Welcome to  BACKEND code",
    });
});

App.all("*", (req, res) => {
    res.status(404).json({
        success: false,
        data: {
            path: req.path,
            method: req.method,
            protocol: req.protocol,
        },
    });
});

const PORT = process.env.PORT || 3000;
App.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
