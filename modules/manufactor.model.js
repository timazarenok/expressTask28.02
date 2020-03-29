module.exports = (Sequelize, sequelize) => (
    sequelize.define("manufactor", {
        name: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false
        }   
    })
);