const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const posts = {};

app.get("/posts", (req, res) => {
    res.send({posts});
});

app.post("/events", (req, res) => {
    const {type, data} = req.body;

    if (type === "postCreated") {
        posts[data.id] = {
            id: data.id,
            title: data.title,
            comment: []
        };
    }

    if (type === "commentCreated") {
        const post = posts[data.postId];

        post.comment.push({
            id: data.id,
            content: data.content
        });
    }

    console.log(posts);
});

app.listen(4002, () => {
    console.log("server start on port 4002");
})