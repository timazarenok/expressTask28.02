var express = require("express");
var router = express.Router();

const salesController = require("../../services/sales");

router.post("/create", salesController.create_sale);

router.post("/destroy", salesController.destroy_sale);

router.post("/", salesController.create_sales);

router.get("/", salesController.get_all);

module.exports = router;
