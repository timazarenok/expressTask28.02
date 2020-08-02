module.exports = (Sequelize, sequelize) =>
  sequelize.define("driver", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    surname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    position: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    personalNumber: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },
    class: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
