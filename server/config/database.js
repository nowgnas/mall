const mysql = require("mysql");
const info = require("./dbKey");

module.exports = {
  init: function () {
    return mysql.createConnection(info);
  },
  connect: function (conn) {
    conn.connect(function (err) {
      if (err) {
        console.log("DB connect fail" + err);
      } else {
        console.log("DB connect success");
      }
    });
  },
};
