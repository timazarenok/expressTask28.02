var express = require("express");
var router = express.Router();

const flightController = require("../../services/flights");

router.post("/create", flightController.create_flight);

router.post("/destroy", flightController.destroy_flight);

router.post("/", flightController.create_flights);

router.get("/", flightController.get_all);

module.exports = router;
