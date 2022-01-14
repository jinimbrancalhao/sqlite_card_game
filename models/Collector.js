const { db, DataTypes, Model } = require('../db/db')

class Collector extends Model {}

Collector.init(
  {
    name: DataTypes.STRING,
    budget: DataTypes.INTEGER
  },
  {
    sequelize: db
  }
)

module.exports = { Collector }
