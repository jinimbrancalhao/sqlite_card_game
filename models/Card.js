const { db, DataTypes, Model } = require('../db/db')

class Card extends Model {}

Card.init(
  {
    name: DataTypes.STRING,
    imgURL: DataTypes.STRING,
    price: DataTypes.INTEGER
  },
  {
    sequelize: db
  }
)

module.exports = { Card }
