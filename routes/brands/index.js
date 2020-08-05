var express = require("express");
var router = express.Router();

const brandController = require("../../services/brands");

router.post("/create", brandController.create_brand);

router.post("/destroy", brandController.destroy_brand);

router.post("/", brandController.create_brands);

router.get("/", brandController.get_all);

module.exports = router;
