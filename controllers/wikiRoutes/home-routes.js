const router = require('express').Router()
const { Article, Page, Image } = require('../../models')

router.get('/home', async (req, res) => {
    try {
        const articleData = await Article.findAll({
            where: {
                pageId: 1
            },
            include: [{ model: Image }]
        })
        if (!articleData) {
            res.status(404).json({ message: 'No articles found' })
        } else {
            const articles = articleData.map( article => article.get({plain: true}))
            res.render('home', { articles })
        }
    }
    catch (err) {
        res.status(500).json(err)
    }
})
router.get('/races', async (req, res) => {
    try {
        const articleData = await Article.findAll({
            where: {
                pageId: 2
            },
            include: [{ model: Image }]
        })
        if (!articleData) {
            res.status(404).json({ message: 'No articles found' })
        } else {
            const articles = articleData.map( article => article.get({plain: true}))
            res.render('races', { articles })
        }
    }
    catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router