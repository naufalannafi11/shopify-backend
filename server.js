const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const app = express();
require('dotenv').config();

const router = require('./routes');



const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  next();
});

app.get("/", (req, res, next) => {
  res.send("Hello");
});

app.use(router);
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port 3000`);
  });
});
