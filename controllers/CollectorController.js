const { Collector, Card } = require('../models/index')

const getCollectors = async (req, res) => {
  try {
    const collectors = await Collector.findAll()
    res.send(collectors)
  } catch (error) {
    throw error
  }
}

const getCollector = async (req, res) => {
  try {
    const collector = await Collector.findByPk(req.params.id)
    res.send(collector)
  } catch (error) {
    throw error
  }
}

const addCollector = async (req, res) => {
  try {
    const collector = await Collector.create(req.body)
    res.send(collector)
  } catch (error) {
    throw error
  }
}

const deleteCollector = async (req, res) => {
  try {
    Collector.destroy({
      where: { id: req.params.id }
    })
    res.send('Collector successfully destroyed')
  } catch (error) {
    throw error
  }
}

const buyCard = async (req, res) => {
  try {
    const card1 = await Card.findByPk(req.params.id)
    const collector1 = await Collector.findByPk(req.params.collectorid)

    const newBudget = collector1.dataValues.budget - card1.dataValues.price

    if (
      collector1.dataValues.budget > card1.dataValues.price &&
      card1.dataValues.CollectorId === null
    ) {
      await collector1.addCard(card1)
      await Collector.update(
        {
          name: collector1.dataValues.name,
          budget: newBudget
        },
        {
          where: { id: req.params.id }
        }
      )
      const collectorCards = await collector1.getCards()
      res.send(collectorCards)
    } else if (collector1.dataValues.budget < card1.dataValues.budget) {
      res.send('Your funds are too low')
    } else {
      res.send('The card is not available')
    }
  } catch (error) {
    throw error
  }
}

const generateFive = async (req, res) => {
  const randomNums = []
  let counter = 0
  const collector = await Collector.findByPk(req.params.id)
  while (counter < 3) {
    const randomNum = Math.ceil(Math.random() * 11)
    if (!randomNums.includes(randomNum)) {
      randomNums.push(randomNum)
      counter++
    }
  }
  for (num of randomNums) {
    const card = await Card.findByPk(num)
    collector.addCard(card)
  }
  const collectorCards = await collector.getCards()
  res.send(collectorCards)
}

module.exports = {
  getCollectors,
  getCollector,
  addCollector,
  deleteCollector,
  buyCard,
  generateFive
}
