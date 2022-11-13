import { NextFunction, Request, Response } from 'express'
import { Category } from './category.model'
import { findOneCategory, listCategory } from './category.service'
export const getCategory = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const product = await listCategory()
    res.status(200).json({
      statusCode: 200,
      message: 'Find all Categorys',
      data: product,
      total: product.length
    })
  } catch (error) {
    next(error)
  }
}

export const getOneCategory = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { id } = req.params
    const product = await findOneCategory(id)
    res.status(200).json({
      statusCode: 200,
      message: 'Find a Category',
      data: product
    })
  } catch (error) {
    next(error)
  }
}

export const createCategory = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { body } = req
    const product = await Category.create({
      ...body
    })
    res.status(201).json({
      statusCode: 201,
      message: 'Create a Category',
      data: product
    })
  } catch (error) {
    next(error)
  }
}
