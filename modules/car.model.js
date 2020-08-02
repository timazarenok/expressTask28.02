module.exports = (Sequelize, sequelize) =>
  sequelize.define("car", {
    number: {
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },
    class: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
