const Router = require('express').Router()
const controller = require('../controllers/CollectorController')

Router.get('/', controller.getCollectors)
Router.post('/', controller.addCollector)
Router.put('/buycard/:id/:collectorid', controller.buyCard)
Router.get('/:id', controller.getCollector)
Router.put('/:id', controller.generateFive)
Router.delete('/:id', controller.deleteCollector)
Router.put('/:collector1/:collector2/:card1/:card2', controller.tradeCard) // have not confirmed this works

module.exports = Router
