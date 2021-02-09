const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { routes: userRoutes } = require("./user/routes");

const { routes: productsRoutes } = require("./products/routes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/user", userRoutes);
app.use("/products", productsRoutes);

module.exports = app;
