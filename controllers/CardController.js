const { Card } = require('../models/index')

const getCards = async (req, res) => {
  try {
    const cards = await Card.findAll()
    res.send(cards)
  } catch (error) {
    throw error
  }
}

const getCard = async (req, res) => {
  try {
    const card = await Card.findByPk(req.params.id)
    res.send(card)
  } catch (error) {
    throw error
  }
}

const addCard = async (req, res) => {
  try {
    const card = await Card.create(req.body)
    res.send(card)
  } catch (error) {
    throw error
  }
}

const deleteCard = async (req, res) => {
  try {
    Card.destroy({
      where: { id: req.params.id }
    })
    res.send('Card successfully destroyed')
  } catch (error) {
    throw error
  }
}

module.exports = { getCards, getCard, addCard, deleteCard }
