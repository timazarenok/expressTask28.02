module.exports = (Sequelize, sequelize) =>
  sequelize.define("sale", {
    number: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },
    label: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
