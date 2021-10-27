const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ArticleImage extends Model {}


ArticleImage.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
        },
        articleId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'article',
                key: 'id'
            }
        },
        imageId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'image',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'article_image',
    }
)

module.exports = ArticleImage