const express = require("express");
const db_config = require("./server/config/connectDB");
const conn = db_config.init();
const bodyParser = require("body-parser");

db_config.connect(conn);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// goto main page
app.get("/", function (req, res) {
  res.send("ROOT");
});

// select data
app.get("/select", (req, res) => {
  const sql = "SELECT * FROM users";

  conn.query(sql, (err, rows, fields) => {
    if (err) console.log("query is not excuted" + err);
    else res.send(rows);
  });
});

// insert data
app.post("/insert", (req, res) => {
  const sql =
    "INSERT INTO users (email, name, password, phone, addr) VALUES (?, ?, ?, ?, ?)";
  const params = [
    req.body.email,
    req.body.name,
    req.body.password,
    req.body.phone,
    req.body.addr,
  ];

  conn.query(sql, params, (err, rows, fields) => {
    if (err) console.log("query is not excuted" + err);
    else res.send(rows);
  });
});

// delete data
// email이랑 password를 받아서 회원 탈퇴
app.delete("/delete", (req, res) => {
  const sql = "DELETE FROM users WHERE email = ?";
  const params = [req.body.email];

  conn.query(sql, params, (err, rows, fields) => {
    if (err) console.log("query is not excuted" + err);
    else res.send(rows);
  });
});

// // update data
// app.put("/update", (req, res) => {
//   const sql = "UPDATE users SET email = ?, age = ? WHERE name = ?";
//   const params = [req.body.name, req.body.age, req.body.name];

//   conn.query(sql, params, (err, rows, fields) => {
//     if (err) console.log("query is not excuted" + err);
//     else res.send(rows);
//   });
// });

// 앱을 실행
const port = 5000;
app.listen(port, () => console.log(`now ${port} port is runnig!`));
