const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ArticleTag extends Model {}


ArticleTag.init(
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
        tagId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'tag',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'article_tag',
    }
)

module.exports = ArticleTag