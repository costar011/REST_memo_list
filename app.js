const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const memos = require("./db");

// app 이라는 변수를 만들었다.
const app = express();
const PORT = 5000; // PORT 는 5000

// morgan을 combined 모드로 사용할거다.
app.use(morgan("combined"));
app.use(cors());

// GET 방식
app.get("/api/memo/list", (req, res, next) => {
  res.status(200).json(memos);
});

// 설정 끝난 후 Server Start
app.listen(PORT, () => {
  console.log("5000 MEMO REST SERVER");
});
