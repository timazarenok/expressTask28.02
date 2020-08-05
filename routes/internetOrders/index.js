var express = require("express");
var router = express.Router();

const internetOrdersController = require("../../services/internetOrders");

router.post("/create", internetOrdersController.create_internet_order);

router.post("/destroy", internetOrdersController.destroy_internet_order);

router.post("/", internetOrdersController.create_internet_orders);

router.get("/", internetOrdersController.get_all);

module.exports = router;
