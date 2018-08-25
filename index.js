const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/ping", (req, res) => {
    res.send("pong");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Listening on port " + PORT));