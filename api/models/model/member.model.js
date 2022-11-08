const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Member", {
        _id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        balance: {
            type: DataTypes.STRING,
            allowNull: false
        },
        transportation: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: "member",
        underscored: true
    });
};