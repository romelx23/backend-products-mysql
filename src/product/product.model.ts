import { DataTypes, Model } from 'sequelize'
import Sequelize from '../db/connection'

class ProductModel extends Model {
  public name!: string
  public url_image!: string
  public price!: string
  public discount!: string
  public category!: string
}

export const Product = Sequelize.define<ProductModel>(
  'product',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url_image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id'
      }
    }
  },
  {
    timestamps: false,
    tableName: 'product'
  }
)
