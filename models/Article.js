const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Article extends Model {}

Article.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true, 
            autoIncrement: true,
            unique: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        articleText: {
            type: DataTypes.TEXT,
            allowNull: false,

        },
        articleImage: {
            type: DataTypes.STRING,
            allowNull: true,
            references: {
                model: 'image',
                key: 'id'
            }

        },
        author: {
            type: DataTypes.STRING,
            allowNull: true,
            onDelete: 'SET NULL',
            references: {
                model: 'user',
                key: 'id'
            }
        },
        authorAlias: {
            type: DataTypes.STRING,
            allowNull: true,
            // references model: Character,
            //           key: id
        },
        pageId: {
            type: DataTypes.INTEGER,
            onDelete: 'SET NULL',
            references: {
                model: 'page',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'article',
    }
)

module.exports = Article