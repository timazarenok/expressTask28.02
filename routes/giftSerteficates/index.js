var express = require("express");
var router = express.Router();

const giftCertificateController = require("../../services/giftCertificates");

router.post("/create", giftCertificateController.create_gift_sertificate);

router.post("/destroy", giftCertificateController.destroy_gift_sertificate);

router.post("/", giftCertificateController.create_gift_sertificates);

router.get("/", giftCertificateController.get_all);

module.exports = router;
