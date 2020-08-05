var express = require("express");
var router = express.Router();

const carModelController = require("../../services/carModels");

router.post("/create", carModelController.create_car_model);

router.post("/destroy", carModelController.destroy_car_model);

router.post("/", carModelController.create_car_models);

router.get("/", carModelController.get_all);

module.exports = router;
