var express = require("express");
var router = express.Router();

const warehouseController = require("../../services/warehouses");

router.post("/create", warehouseController.create_warehouse);

router.post("/destroy", warehouseController.destroy_warehouse);

router.post("/", warehouseController.create_warehouses);

router.get("/", warehouseController.get_all);

module.exports = router;
