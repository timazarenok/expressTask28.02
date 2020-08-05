var express = require("express");
var router = express.Router();

const retailPriceController = require("../../services/retailPrices");

router.post("/create", retailPriceController.create_retail_price);

router.post("/destroy", retailPriceController.destroy_retail_price);

router.post("/", retailPriceController.create_retail_prices);

router.get("/", retailPriceController.get_all);

module.exports = router;
