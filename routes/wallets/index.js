var express = require("express");
var router = express.Router();

const walletController = require("../../services/wallets");

router.post("/create", walletController.create_wallet);

router.post("/destroy", walletController.destroy_wallet);

router.post("/", walletController.create_wallets);

router.get("/", walletController.get_all);

module.exports = router;
