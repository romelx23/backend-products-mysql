import { Product } from './product.model'
import boom from '@hapi/boom'
import { Op } from 'sequelize'

interface ProductI{
    title:string,
    pub_date:string,
    img:string,
    url_download:string,
}

export const listProduct = async () => {
  const product = await Product.findAll({ order: [['name', 'DESC']] })
  if (!product) throw boom.boomify(new Error('No hay producto'), { statusCode: 404 })
  return product
}

export const findOneProduct = async (id: number | string) => {
  const product = await Product.findOne({
    where: {
      id
    }
  })
  if (!product) throw boom.boomify(new Error('No se encontro producto con ese ID'), { statusCode: 400 })
  return product
}

export const findByTerm = async (term: string) => {
  const product = await Product.findAll({
    where: {
      name: {
        [Op.like]: `%${term}%`
      }
    }
  })
  if (!product) throw boom.boomify(new Error('No se encontro producto con ese termino'), { statusCode: 400 })
  return product
}

export const createOneProduct = async (productData: ProductI) => {
  const newProduct = await Product.create({
    ...productData
  })
  if (!newProduct) throw boom.boomify(new Error('Error al crear producto'), { statusCode: 400 })
  return newProduct
}

export const updateOneProduct = async (id: string, product: ProductI) => {
  const productToUpdate = await Product.findOne({
    where: {
      id
    }
  })
  if (!productToUpdate) throw boom.boomify(new Error('No se encontro producto con ese ID'), { statusCode: 400 })
  const updatedProduct = await productToUpdate.update({
    ...product
  })
  if (!updatedProduct) throw boom.boomify(new Error('Error al actualizar producto'), { statusCode: 400 })
  return updatedProduct
}

export const deleteOneProduct = async (id: string) => {
  const productToDelete = await Product.findOne({
    where: {
      id
    }
  })
  if (!productToDelete) throw boom.boomify(new Error('No se encontro producto con ese ID'), { statusCode: 400 })
  const deletedProduct = await productToDelete.destroy()
  return deletedProduct
}

export const productByCategory = async (id: string) => {
  const product = await Product.findAll({
    where: {
      category: id
    }
  })
  if (!product) throw boom.boomify(new Error('No se encontro producto con ese ID'), { statusCode: 400 })
  return product
}
