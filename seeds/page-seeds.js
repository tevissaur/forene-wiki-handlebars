const { Page } = require('../models');

const pageData = [
    {
        pageName: "home"
    },
    {
        pageName: "races-home"
    },
    {
        pageName: "bestiary-home"
    },
    {
        pageName: "geography-home"
    },
    {
        pageName: "history-home"
    },
    {
        pageName: "pantheons-home"
    },
    {
        pageName: "organizations-home"
    },
]

const seedPages = () => Page.bulkCreate(pageData)

module.exports = seedPages