module.exports = (Sequelize, sequelize) =>
  sequelize.define("country", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },
    label: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
