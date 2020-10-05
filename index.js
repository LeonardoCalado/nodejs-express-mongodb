const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/nodejsapi", { useNewUrlParser: true, useUnifiedTopology: true });
requireDir("./app/model");

app.use("/app", require("./app/routes"));

app.listen(3000);