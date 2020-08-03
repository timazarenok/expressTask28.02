module.exports = (Sequelize, sequelize) =>
  sequelize.define("wallet", {
    label: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },
  });
