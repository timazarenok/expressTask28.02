module.exports = (Sequelize, sequelize) =>
  sequelize.define("order", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    number: {
      type: Sequelize.BIGINT(11),
      allowNull: false,
    },
    seria: {
      type: Sequelize.BIGINT(11),
      allowNull: false,
    },
    dateOfStart: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    dateOfFinish: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    numberOfOrder: {
      type: Sequelize.BIGINT(11),
      allowNull: true,
    },
  });
