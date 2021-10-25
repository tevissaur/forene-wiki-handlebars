const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')
const User = require('./User.js')

class Article extends Model {}

Article.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true, 
            autoIncrement: true,

        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        articleText: {
            type: DataTypes.TEXT,
            allowNull: false,

        },
        author: {
            references: {
                model: User,
                key: 'id'
            }
        }
    }
)