const { Collector, Card } = require('../models/index')
const { db } = require('../db/db')

describe('collector class', () => {
  beforeAll(async () => {
    await db.sync({ force: true })
  })

  test('can add a card', async () => {
    const testCollector = await Collector.create({
      name: 'Test Collector',
      budget: 100
    })

    const testCard = await Card.create({
      name: 'Card',
      imgURL: 'www.test.com',
      price: 20
    })

    await testCollector.addCard(testCard)
    const cards = await testCollector.getCards()
    expect(cards.length).toBe(1)
  })
})
