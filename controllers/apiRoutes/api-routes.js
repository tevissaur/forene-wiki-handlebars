const router = require('express').Router()
const { Article, Page, Image, ArticleImage, ArticleTag } = require('../../models')


router.get('/articles', async (req, res) => {
    try {
        const data = await Article.findAll({
            include: [{ model: Page }, { model: Image }]
        })
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json(err)
    }
})
router.get('/pages', async (req, res) => {
    try {
        const data = await Page.findAll({
            include: [
                {
                    model: Article,
                    include: [{ model: Image }]
                }
            ]
        })

        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

router.get('/images', async (req, res) => {
    try {
        console.log(Image)
        const data = await Image.findAll({
            include: [{ model: Article }]
        })

        res.status(200).json(data)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router