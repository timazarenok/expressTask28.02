var express = require("express");
var router = express.Router();

const productController = require("../../services/products");

router.post("/create", productController.create_product);

router.post("/destroy", productController.create_products);

router.post("/", productController.create_products);

router.get("/", productController.get_all);

module.exports = router;
