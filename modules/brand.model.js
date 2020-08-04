module.exports = (Sequelize, sequelize) =>
  sequelize.define("brand", {
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
