const express = require('express');
const app = express();

const cors = require("cors");

const db = require("./app/models");
const userModel = require('./app/models/user.model');

const user = require('./app/controllers/user.controller');

const port = 8080;

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

require("./app/routes/user.routes")(app);

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);
  await db.users.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db")
  });
  await user.initial();
});
