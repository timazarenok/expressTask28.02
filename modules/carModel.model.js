module.exports = (Sequelize, sequelize) =>
  sequelize.define("carModel", {
    label: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },
  });
