import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";


const app = require('express')();
const server = require('http').createServer(app);
dotenv.config();

//Start the server, and setup socket.io
server.listen(8080, () =>
    console.log(`Server started at http://localhost:8080`)
);

// API setup
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "10mb" }));

// Mongoose setup
mongoose.set("useUnifiedTopology", true);
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", true);

const connectToDatabase = async () => {
    try {
        mongoose.connect(process.env.DATABASEURL!, {
            useFindAndModify: true,
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        app.set("db", process.env.DATABASEUR);
    } catch (err) {
        // To some kind of error handling here
    }
};
connectToDatabase();

// This will require the schemas for the database and it can reference the stuff
require("./models");

const router = express.Router();

// Route/API endpoints
import routes from "./routes";
router.use("/", routes);

// Do some kind of route authoriation here
// router.use()

//Setup the server
app.use("/api", router);

export default { server, app };
