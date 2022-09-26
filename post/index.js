'use strict';

const express = require("express");
const bodyParser = require("body-parser");
const {randomBytes} = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res, next) => {
    res.send(posts);
});

app.post("/posts", async (req, res, next) => {
    const id = randomBytes(4).toString("hex");
    const { title } = req.body;

    posts[id] = {
        id,
        title
    }

    await axios.post("http://localhost:4005/events", {
        type: "postCreated",
        data: {
            id,
            title
        }
    }).catch(error => console.log(error));

    res.status(200).send(posts);
});

app.post("/events", (req, res) => {
    console.log(req.body.type);
});

app.listen(4000, () => {
    console.log("server start on port 4000");
});