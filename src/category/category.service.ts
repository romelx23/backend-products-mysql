import { Category } from './category.model'
import boom from '@hapi/boom'

export const listCategory = async () => {
  const product = await Category.findAll({ order: [['name', 'DESC']] })
  if (!product) throw boom.boomify(new Error('No hay producto'), { statusCode: 404 })
  return product
}

export const findOneCategory = async (id: number | string) => {
  const product = await Category.findOne({
    where: {
      id
    }
  })
  if (!product) throw boom.boomify(new Error('No se encontro producto con ese ID'), { statusCode: 400 })
  return product
}
