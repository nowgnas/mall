const express = require("express");
const db_config = require("./server/config/connectDB");
const conn = db_config.init();
const bodyParser = require("body-parser");

db_config.connect(conn);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.send("ROOT");
});

app.get("/select", (req, res) => {
  const sql = "SELECT * FROM users";

  conn.query(sql, (err, rows, fields) => {
    if (err) console.log("query is not excuted" + err);
    else res.send(rows);
  });
});

// todo: create table users and test insert with get method
