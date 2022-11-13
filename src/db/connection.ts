import { Sequelize } from 'sequelize'
import { config } from '../config/config'

const sequelize = new Sequelize(config.DB.DB_NAME, config.DB.DB_USER, config.DB.DB_PASS, {
  host: config.DB.DB_HOST,
  dialect: 'mysql',
  port: Number(config.DB.DB_PORT),
  sync: { force: false },
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})
export default sequelize
