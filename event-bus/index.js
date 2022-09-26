"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(bodyParser.json());

app.use("/events", (req, res) => {
    const { event } = req.body;

    axios.post("http://localhost:4000/events", event)
        .catch(err => console.log(err));
    axios.post("http://localhost:4001/events", event)
        .catch(err => console.log(err));
    axios.post("http://localhost:4002/events", event)
        .catch(err => console.log(err));
    
    res.status(200).send({message: success});
});

app.listen(4005, () => {
    console.log("server start on port 4005");
})