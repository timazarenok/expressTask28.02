var express = require("express");
var router = express.Router();

const carsController = require("../../services/cars");

router.post("/create", carsController.create_car);

router.post("/destroy", carsController.destroy_car);

router.post("/", carsController.create_cars);

router.get("/", carsController.get_all);

module.exports = router;
