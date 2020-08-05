var express = require("express");
var router = express.Router();

const currentPricesController = require("../../services/currentPrices");

router.post("/create", currentPricesController.create_current_price);

router.post("/destroy", currentPricesController.destroy_current_price);

router.post("/", currentPricesController.create_current_prices);

router.get("/", currentPricesController.get_all);

module.exports = router;
