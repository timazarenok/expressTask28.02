module.exports = (Sequelize, sequelize) =>
  sequelize.define("internetOrder", {
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
    createdDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    cost: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    deliveryDate: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  });
