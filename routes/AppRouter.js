const Router = require('express').Router()
const CardRouter = require('./CardRouter')
const CollectorRouter = require('./CollectorRouter')

Router.use('/card', CardRouter)
Router.use('/collector', CollectorRouter)

module.exports = Router
