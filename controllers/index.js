const router = require('express').Router()

const homeRoutes = require('./wikiRoutes/home-routes')
const apiRoutes = require('./apiRoutes/api-routes')

router.use('/wiki', homeRoutes)
router.use('/api', apiRoutes)

module.exports = router

