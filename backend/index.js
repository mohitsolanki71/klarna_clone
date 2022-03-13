const express = require("express");
const cors = require("cors");
const productController = require("./controller/product.controller");
const connect = require("./config/db");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/product", productController);

app.listen(PORT, async function () {
  await connect();
  console.log("listening to port:", PORT);
});
