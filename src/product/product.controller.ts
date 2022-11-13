import { NextFunction, Request, Response } from 'express'
import { Product } from './product.model'
import { findOneProduct, listProduct, updateOneProduct, deleteOneProduct, findByTerm, productByCategory } from './product.service'
export const getProduct = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const product = await listProduct()
    res.status(200).json({
      statusCode: 200,
      message: 'Find all Products',
      data: product,
      total: product.length
    })
  } catch (error) {
    next(error)
  }
}

export const getOneProduct = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { id } = req.params
    const product = await findOneProduct(id)
    res.status(200).json({
      statusCode: 200,
      message: 'Find a Product',
      data: product
    })
  } catch (error) {
    next(error)
  }
}

export const createProduct = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { body } = req
    const product = await Product.create({
      ...body
    })
    res.status(201).json({
      statusCode: 201,
      message: 'Create a Product',
      data: product
    })
  } catch (error) {
    next(error)
  }
}

export const updateProduct = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { id } = req.params
    const { body } = req
    const product = await updateOneProduct(id, body)
    res.status(201).json({
      statusCode: 201,
      message: 'Update a Product',
      data: product
    })
  } catch (error) {
    next(error)
  }
}

export const deleteProduct = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { id } = req.params
    const product = await deleteOneProduct(id)
    res.status(201).json({
      statusCode: 201,
      message: 'Delete a Product',
      data: product
    })
  } catch (error) {
    next(error)
  }
}

export const findProduct = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { name } = req.params
    const product = await findByTerm(name)
    res.status(200).json({
      statusCode: 200,
      message: 'Find a Product',
      data: product
    })
  } catch (error) {
    next(error)
  }
}

export const findProductByCategory = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { id } = req.params
    const product = await productByCategory(id)
    res.status(200).json({
      statusCode: 200,
      message: 'Find a Product',
      data: product
    })
  } catch (error) {
    next(error)
  }
}
