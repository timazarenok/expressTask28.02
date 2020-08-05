var express = require("express");
var router = express.Router();

const saleTypesController = require("../../services/saleTypes");

router.post("/create", saleTypesController.create_sale_type);

router.post("/destroy", saleTypesController.destroy_sale_type);

router.post("/", saleTypesController.create_sale_types);

router.get("/", saleTypesController.get_all);

module.exports = router;
