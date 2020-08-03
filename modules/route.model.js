module.exports = (Sequelize, sequelize) =>
  sequelize.define("route5", {
    numerator: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    number: {
      type: Sequelize.INTEGER,
      primaryKey: true,
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
