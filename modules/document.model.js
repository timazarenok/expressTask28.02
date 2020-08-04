module.exports = (Sequelize, sequelize) =>
  sequelize.define("document", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    seria: {
      type: Sequelize.BIGINT(11),
      allowNull: false,
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    label: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    summa: {
      type: Sequelize.BIGINT(11),
      allowNull: false,
    },
    debp: {
      type: Sequelize.BIGINT(11),
      allowNull: false,
    },
  });
