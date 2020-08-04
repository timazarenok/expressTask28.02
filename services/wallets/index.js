var { Wallet } = require("../../modules");

const CreateWallet = (w) =>
  Wallet.create({
    label: w.label,
  });

exports.create_wallet = (req, res) => CreateWallet(req.body);

exports.destroy_wallet = (req, res) => {
  Wallet.destroy({
    where: {
      label: req.body.label,
    },
  });
};

exports.create_wallets = (req, res) => {
  Wallet.destroy({
    where: {},
    truncate: false,
  });
  const wallets = req.body.data;
  for (var w of wallets) {
    CreateWallet(w);
  }
};

exports.get_all = (req, res) => {
  Wallet.findAll()
    .then((wallets) => {
      res.send(wallets);
    })
    .catch((err) => res.send(err));
};
