const express = require("express");
const app = express.Router();

const productRoute = require("./productRoute");
const authRoute = require("./authRoute");
const orderRoute = require("./orderRoute");
const usersRoute = require("./usersRoute");
const addressRoute = require("./addressRoute");
const orderItemRoute = require("./orderItemRoute");
const transactionRoute = require("./transactionRoute");

const authenticateJWT = require("../middleware/auth");


app.use("/admin/2024-07/api/users", authenticateJWT,  usersRoute);
app.use("/admin/2024-07/api/products", authenticateJWT, productRoute);
app.use("/admin/2024-07/api/orders", authenticateJWT, orderRoute);
app.use("/admin/2024-07/api/addresses", authenticateJWT, addressRoute);
app.use("/admin/2024-07/api/orderItems", authenticateJWT, orderItemRoute);
app.use("/admin/2024-07/api/transactions", authenticateJWT, transactionRoute);




app.use("/admin/2024-07/api/auth", authRoute)

module.exports = app