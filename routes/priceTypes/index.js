var express = require("express");
var router = express.Router();

const priceTypeController = require("../../services/priceTypes");

router.post("/create", priceTypeController.create_price_type);

router.post("/destroy", priceTypeController.destroy_price_type);

router.post("/", priceTypeController.create_price_types);

router.get("/", priceTypeController.get_all);

module.exports = router;
