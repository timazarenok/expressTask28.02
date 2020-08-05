var express = require("express");
var router = express.Router();

const unitController = require("../../services/units");

router.post("/create", unitController.create_unit);

router.post("/destroy", unitController.destroy_unit);

router.post("/", unitController.create_units);

router.get("/", unitController.get_all);

module.exports = router;
