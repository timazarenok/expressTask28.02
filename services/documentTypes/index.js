var { DocumentType } = require("../../modules");

const CreateDocumentType = (dt) =>
  DocumentType.create({
    id: dt.id,
    label: dt.label,
  });

exports.create_document_type = (req, res) => CreateDocumentType(req.body);

exports.destroy_document_type = (req, res) => {
  DocumentType.destroy({
    where: {
      id: req.body.id,
    },
  });
};

exports.create_document_types = (req, res) => {
  DocumentType.destroy({
    where: {},
    truncate: false,
  });
  const documentTypes = req.body.data;
  for (var dt of documentTypes) {
    CreateDocumentType(dt);
  }
};

exports.get_all = (req, res) => {
  DocumentType.findAll()
    .then((documentTypes) => {
      res.send(documentTypes);
    })
    .catch((err) => res.send(err));
};
