var { GiftSerteficate } = require("../../modules");

const CreateGiftSerteficate = (gs) =>
  GiftSerteficate.create({
    id: gs.id,
    number: gs.number,
    seria: gs.seria,
    createdFrom: gs.createdFrom,
    validity: gs.validity,
    cost: gs.cost,
    soldFor: gs.cost,
    createdDate: gs.createdAt,
  });

exports.create_gift_sertificate = (req, res) => CreateGiftSerteficate(req.body);

exports.destroy_gift_sertificate = (req, res) => {
  GiftSerteficate.destroy({
    where: {
      id: req.body.id,
    },
  });
};

exports.create_gift_sertificates = (req, res) => {
  GiftSerteficate.destroy({
    where: {},
    truncate: false,
  });
  const giftSertificates = req.body.data;
  for (var gs of giftSertificates) {
    CreateGiftSerteficate(gs);
  }
};

exports.get_all = (req, res) => {
  GiftSerteficate.findAll()
    .then((giftSertificates) => {
      res.send(giftSertificates);
    })
    .catch((err) => res.send(err));
};
