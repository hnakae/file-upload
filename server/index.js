const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const fs = require("fs");
const { fileURLToPath } = require("url");

// const sgf = require("@sabaki/sgf");

app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "employeesystem",
});

db.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + db.threadId);
});

// let rootNodes = sgf.parseFile("./game.sgf");s

app.use(express.raw({ type: "application/octet-stream" }));

// app.use(express.json());

app.post("/upload", (req, res) => {
  console.log(req.body.file);
  const file = req.body.file;
  const fileName = req.body.fileName;
  const data = fs.readFileSync(String(file.path));

  const sql = "INSERT INTO uploads (file, fileName) VALUES (?, ?)";
  const values = [data, fileName];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Values Inserted");
    }
  });
});

app.get("/uploads", (req, res) => {
  db.query("SELECT * FROM uploads", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// app.post("/create", (req, res) => {
//   const name = req.body.name;
//   const age = req.body.age;
//   const country = req.body.country;
//   const position = req.body.position;
//   const wage = req.body.wage;

//   db.query(
//     "INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)",
//     [name, age, country, position, wage],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send("Values Inserted");
//       }
//     }
//   );
// });

// app.get("/employees", (req, res) => {
//   db.query("SELECT * FROM employees", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

app.listen(3001, () => {
  console.log("server running on port 3001");
});
