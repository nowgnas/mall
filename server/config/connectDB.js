const mysql = require("mysql");
const dbKey = require("./dbKey");

module.exports = {
  init: () => {
    return mysql.createConnection(dbKey);
  },
  connect: (conn) => {
    conn.connect((err) => {
      if (err) console.log("mysql connection error:" + err);
      else console.log("DB connected...");
    });
  },
};
