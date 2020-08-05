var express = require("express");
var router = express.Router();

const routesController = require("../../services/routes");

router.post("/create", routesController.create_route);

router.post("/destroy", routesController.destroy_route);

router.post("/", routesController.create_routes);

router.get("/", routesController.get_all);

module.exports = router;
