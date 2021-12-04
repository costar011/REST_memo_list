const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const memos = require("./db");

const app = express();
const PORT = 5000;

app.use(morgan("combined"));
app.use(cors());

app.get("/api/memo/list", (req, res, next) => {
  res.status(200).json(memos);
});

app.listen(PORT, () => {
  console.log("5000 MEMO REST SERVER");
});
