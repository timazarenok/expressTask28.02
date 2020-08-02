var express = require("express");
var router = express.Router();

const productsGroupsController = require("../../services/productsGroups");

router.post("/create", productsGroupsController.create_products_group);

router.post("/destroy", productsGroupsController.destroy_products_group);

router.post("/", productsGroupsController.create_products_groups);

router.get("/", productsGroupsController.get_all);

module.exports = router;
