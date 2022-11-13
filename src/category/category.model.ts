import { DataTypes, Model } from 'sequelize'
import Sequelize from '../db/connection'

class CategoryModel extends Model {
  public name!: string
}

export const Category = Sequelize.define<CategoryModel>(
  'category',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false,
    tableName: 'category'
  }
)
