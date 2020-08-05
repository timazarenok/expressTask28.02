var express = require("express");
var router = express.Router();

const driverController = require("../../services/drivers");

router.post("/create", driverController.create_driver);

router.post("/destroy", driverController.destroy_driver);

router.post("/", driverController.create_drivers);

router.get("/", driverController.get_all);

module.exports = router;
