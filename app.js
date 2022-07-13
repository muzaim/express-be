const express = require("express");
const app = express();

// parse json
app.use(express.json());

// use products router
const productsRouter = require("./routes/products");
app.use("/api/products", productsRouter);

// run server
app.listen(5000, () => {
  console.log(`Servr is listening on Port: 5000 ...`);
});
