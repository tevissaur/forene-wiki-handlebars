const router = require('express').Router()
const { Article, Page } = require('../../models')

router.get('/home', async (req, res) => {
    try {
        console.log(Article, Page)
        const articleData = await Article.findAll([
            include
        ])
        if (!articleData) {
            res.status(404).json({ message: 'No articles found' })
        }
        res.status(200).json(articleData)
    }
    catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router