module.exports = (Sequelize, sequelize) =>
  sequelize.define("flight", {
    number: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    seria: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    documentDate: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    flightWeight: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    priceNDC: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
  });
