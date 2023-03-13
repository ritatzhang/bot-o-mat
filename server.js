const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + "/dist/"));
app.use("/src/", express.static(__dirname + "/src/"));

app.listen(process.env.PORT || 8080);
