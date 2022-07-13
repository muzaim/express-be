const express = require("express");
const router = express.Router();


// import controller
const {
  getDataProducts,
  getDetailProduct,
  genDataProduct,
  updProduct,
  delDataProduct,
} = require("../controllers/productController");

// getDataProducts
router.get("/", getDataProducts);

// getDetailProduct
router.get("/:id", getDetailProduct);

// genProduct
router.post("/", genDataProduct);

// updProduct
router.put("/:id", updProduct);

// delDataProduct
router.delete("/:id", delDataProduct);

module.exports = router;
