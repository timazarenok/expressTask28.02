var express = require("express");
var router = express.Router();

const countriesController = require("../../services/countries");

router.post("/create", countriesController.create_country);

router.post("/destroy", countriesController.destroy_country);

router.post("/", countriesController.create_countries);

router.get("/", countriesController.get_all);

module.exports = router;
