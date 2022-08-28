import express from "express";
import cors from "cors";
import { getProduct, getProducts } from "./db.js";

const app = express();
app.use(cors());

//add zuri-products - import up
// app.get("/", addProducts);

app.get("/products", getProducts);
app.get("/products/:id", getProduct);

app.listen(3000, (err, res) => {
  if (err) {
    console.log(err);
  }
  console.log("listening on port 3000...");
});
