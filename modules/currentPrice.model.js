module.exports = (Sequelize, sequelize) =>
  sequelize.define("currentPrice", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    code: {
      type: Sequelize.BIGINT(11),
      allowNull: false,
    },
    label: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cost: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });
