import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

import db from "./../src/db.js";

dotenv.config()

const app = express();

app.use(cors());
app.use(json());

app.listen(process.env.PORT || 5000, () => {
    console.log(`Connected and listening in the port ${process.env.PORT || 5000}`);
})