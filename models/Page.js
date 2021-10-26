const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Page extends Model { }

Page.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        pageName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'page',
    }

)

module.exports = Page