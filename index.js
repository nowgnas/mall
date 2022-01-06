const express = require("express");
const bodyParser = require("body-parser");
const db = require("./server/config/database");
const conn = db.init();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// db connection
db.connect(conn);

// main page
app.get("/", (req, res) => res.send("Im Root"));

// test url
// app.get("/test", (req, res) => console.log(User.name.type));

// create db

// database select
app.get("/list", (req, res) => {
  const sql = "SELECT * FROM user";
  conn.query(sql, (err, rows, fields) => {
    for (let index = 0; index < rows.length; index++) {
      console.log(rows[index].id, rows[i].name);
    }
  });
});

// insert data
app.get("/writeDB", (req, res) => {
  const userInfo = req.body;
  console.log(body);

  const sql = "INSERT INTO user VALUES(?, ?)";
  const params = [userInfo.id, userInfo.name];
  console.log(sql);
  conn.query(sql, params, (err) => {
    if (err) {
      console.log("write error");
    } else {
      res.redirect("/list");
    }
  });
});

// 앱 실행
const port = 8080;
app.listen(port, () => console.log(`${port} port is running`));
