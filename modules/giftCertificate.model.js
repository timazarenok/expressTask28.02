module.exports = (Sequelize, sequelize) =>
  sequelize.define("giftCertificate", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    number: {
      type: Sequelize.BIGINT(11),
      allowNull: false,
    },
    seria: {
      type: Sequelize.BIGINT(11),
      allowNull: false,
    },
    createdFrom: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    validity: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cost: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    soldFor: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    createDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });
