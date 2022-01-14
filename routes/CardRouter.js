const Router = require('express').Router()
const controller = require('../controllers/CardController')

Router.get('/', controller.getCards)
Router.post('/', controller.addCard)
Router.get('/:id', controller.getCard)
Router.delete('/:id', controller.deleteCard)

module.exports = Router
