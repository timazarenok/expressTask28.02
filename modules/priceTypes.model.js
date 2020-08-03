module.exports = (Sequelize, sequelize) =>
  sequelize.define("priceTypes", {
    code: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },
    label: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
