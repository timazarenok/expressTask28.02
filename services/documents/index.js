var { Document } = require("../../modules");

const CreateDocument = (d) =>
  Document.create({
    id: d.id,
    seria: d.seria,
    date: d.date,
    label: d.label,
    summa: d.summa,
    debp: d.debp,
  });

exports.create_document = (req, res) => CreateDocument(req.body);

exports.destroy_document = (req, res) => {
  Document.destroy({
    where: {
      id: req.body.id,
    },
  });
};

exports.create_documents = (req, res) => {
  Document.destroy({
    where: {},
    truncate: false,
  });
  const documents = req.body.data;
  for (var d of documents) {
    CreateDocument(d);
  }
};

exports.get_all = (req, res) => {
  Document.findAll()
    .then((documents) => {
      res.send(documents);
    })
    .catch((err) => res.send(err));
};
