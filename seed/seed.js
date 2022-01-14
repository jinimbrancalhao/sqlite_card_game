const path = require('path')
const fs = require('fs').promises

const { db } = require('../db/db')
const { Card, Collector } = require('../models/index')
// const { Collector } = require('../models/Collector')

const seed = async () => {
  await db.sync({ force: true })

  const seedPath = path.join(__dirname, 'cards.json')
  const seedPath2 = path.join(__dirname, 'collectors.json')

  const buffer = await fs.readFile(seedPath)
  const { cardData } = JSON.parse(String(buffer))

  const buffer2 = await fs.readFile(seedPath2)
  const { collectorData } = JSON.parse(String(buffer2))

  const cardPromises = cardData.map((card) => {
    Card.create(card)
  })

  const collectorPromises = collectorData.map((collector) => {
    Collector.create(collector)
  })

  await Promise.all(cardPromises)
  await Promise.all(collectorPromises)

  console.log('All of our Cards and Collectors have successfully populated')
}

module.exports = seed
