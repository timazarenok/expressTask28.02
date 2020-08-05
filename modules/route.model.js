module.exports = (Sequelize, sequelize) =>
  sequelize.define("route", {
    number: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    numerator: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    seria: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    customerAddress: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
