var express = require("express");
var router = express.Router();

const tablesController = require("../../services/tables");

router.get("/customers", tablesController.get_customers);

router.get("/providers", tablesController.get_providers);

router.get("/", (req, res) => {
  res.send();
});

module.exports = router;
