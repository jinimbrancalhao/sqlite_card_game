const Router = require('express').Router()
const controller = require('../controllers/CollectorController')

Router.get('/', controller.getCollectors)
Router.post('/', controller.addCollector)
Router.put('/buycard/:id/:collectorid', controller.buyCard)
Router.get('/:id', controller.getCollector)
Router.put('/:id', controller.generateFive)
Router.delete('/:id', controller.deleteCollector)

module.exports = Router
