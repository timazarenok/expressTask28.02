var express = require("express");
var router = express.Router();

const documentsController = require("../../services/documents");

router.post("/create", documentsController.create_document);

router.post("/destroy", documentsController.destroy_document);

router.post("/", documentsController.create_documents);

router.get("/", documentsController.get_all);

module.exports = router;
