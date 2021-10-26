const Article = require('./Article')
const ArticleTag = require('./ArticleTag')
const Tag = require('./Tag')
const Page = require('./Page')
const User = require('./User')


Article.belongsTo(User, {
    foreignKey: 'pageId'
})

User.hasMany(Article, {
    foreignKey: 'author'
})

Page.hasMany(Article, {
    foreignKey: 'pageId'
})

Article.belongsToMany(Tag, {
    foreignKey: 'articleId',
    through: {
        model: ArticleTag,
        unique: false
    }
})

Tag.belongsToMany(Article, {
    foreignKey: 'tagId',
    through: {
        model: ArticleTag,
        unique: false
    }
})

module.exports = {
    Article,
    Tag, 
    ArticleTag,
    User,
    Page
}