var express = require("express");
var router = express.Router();

const orderController = require("../../services/orders");

router.post("/create", orderController.create_order);

router.post("/destroy", orderController.destroy_order);

router.post("/", orderController.create_orders);

router.get("/", orderController.get_all);

module.exports = router;
