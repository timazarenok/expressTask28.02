var express = require("express");
var router = express.Router();

const contractController = require("../../services/contracts");

router.post("/create", contractController.create_contract);

router.post("/destroy", contractController.destroy_contract);

router.post("/", contractController.destroy_contract);

router.get("/", contractController.get_all);

module.exports = router;
