const Article = require('./Article')
const ArticleTag = require('./ArticleTag')
const Tag = require('./Tag')
const Page = require('./Page')
const User = require('./User')
const Image = require('./Image')
const ArticleImage = require('./ArticleImage')

Article.belongsTo(Page, {
    foreignKey: 'pageId'
})

Page.hasMany(Article, {
    foreignKey: 'pageId'
})


// Article.hasOne(Image, {
//     foreignKey: 'articleImage'
// })

// Image.belongsTo(Article, {
//     foreignKey: 'articleId'
// })

// User.hasMany(Article, {
//     foreignKey: 'author'
// })

Article.belongsToMany(Image, {
    foreignKey: 'articleId',
    through: {
        model: ArticleImage,
        unique: false
    }
})

Image.belongsToMany(Article, {
    foreignKey: 'imageId',
    through: {
        model: ArticleImage,
        unique: false
    }
})


// Article.belongsToMany(Tag, {
//     foreignKey: 'articleId',
//     through: {
//         model: ArticleTag,
//         unique: false
//     }
// })

// Tag.belongsToMany(Article, {
//     foreignKey: 'tagId',
//     through: {
//         model: ArticleTag,
//         unique: false
//     }
// })

module.exports = {
    Article,
    Tag, 
    ArticleTag,
    User,
    Page,
    Image,
    ArticleImage
}