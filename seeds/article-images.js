const ArticleImage = require('../models/ArticleImage')

const articleImageData = [
    {
        articleId: 1,
        imageId: 1
        
    },
    {
        articleId: 2,
        imageId: 2
        
    },

]

const seedArticleImages = () => ArticleImage.bulkCreate(articleImageData)

module.exports = seedArticleImages