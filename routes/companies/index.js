var express = require("express");
var router = express.Router();

const companyController = require("../../services/companies");

router.post("/create", companyController.create_company);

router.post("/destroy", companyController.destroy_company);

router.post("/", companyController.create_companies);

router.get("/", companyController.get_all);

module.exports = router;
