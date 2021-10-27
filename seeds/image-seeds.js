const Image = require('../models/Image')

const imageData = [
    {
        title: 'forene-topographical.jpg',
        description: 'Illustration of Forene',
        
    },
    {
        title: 'durglagh.png',
        description: 'Secrets bubble underneath these swamps.',
    }
]

const seedImages = () => Image.bulkCreate(imageData)

module.exports = seedImages