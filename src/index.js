import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

import db from "./../src/db.js";

dotenv.config()

const app = express();

app.use(cors());
app.use(json());

function randomizer() {
    return Math.random() - 0.5;
}

app.get("/questions", async (req, res) => {
    try {
        const questions = await db.collection("questions").find().toArray();

        questions.sort(randomizer);
        
        questions.forEach(q => q.answers.sort(randomizer));

        res.send(questions);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

app.listen(process.env.PORT || 5000, () => {
    console.log(`Connected and listening in the port ${process.env.PORT || 5000}`);
})