var express = require("express");
var router = express.Router();

const internetOrderStatusController = require("../../services/internetOrderStatus");

router.post(
  "/create",
  internetOrderStatusController.create_internet_order_status
);

router.post(
  "/destroy",
  internetOrderStatusController.destroy_internet_order_status
);

router.post("/", internetOrderStatusController.create_internet_order_statuses);

router.get("/", internetOrderStatusController.get_all);

module.exports = router;
