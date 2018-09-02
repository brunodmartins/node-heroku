const pessoa = require("./routes/pessoa");
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.post("/pessoas", pessoa.save);
app.get("/pessoas", pessoa.list);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Listening on port " + PORT));