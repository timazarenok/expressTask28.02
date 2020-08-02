var express = require("express");
var router = express.Router();

const manufactorController = require("../../services/manufactors");

router.post("/create", manufactorController.create_manufactor);

router.post("/destroy", manufactorController.create_manufactors);

router.post("/", manufactorController.create_manufactors);

router.get("/", manufactorController.get_all);

module.exports = router;
