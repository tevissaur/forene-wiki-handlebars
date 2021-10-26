const { Model, DataTypes } = require('sequelize');
const Article = require('./Article')
const Tag = require('./Tag')

const sequelize = require('../config/connection');

class ArticleTag extends Model {}


ArticleTag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        articleId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: Article,
                key: 'id'
            }
        },
        tagId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: Tag,
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