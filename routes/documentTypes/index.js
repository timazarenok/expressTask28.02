var express = require("express");
var router = express.Router();

const documentTypesController = require("../../services/documentTypes");

router.post("/create", documentTypesController.create_document_type);

router.post("/destroy", documentTypesController.destroy_document_type);

router.post("/", documentTypesController.create_document_types);

router.get("/", documentTypesController.get_all);

module.exports = router;
