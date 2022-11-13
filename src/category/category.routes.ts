import { Router } from 'express'
import { validationHandler } from '../utils/middlewares'
import { idCategorySchema } from '../utils/schemas'
import { getCategory, getOneCategory } from './category.controller'
const router = Router()

router.get('/', getCategory)

router.get('/:id', [
  validationHandler(idCategorySchema, 'params')
], getOneCategory)

// router.post('/', [
//   validateJwt,
//   validationHandler(createCategorySchema, 'body')
// ], createCategory)

// router.put('/:id', [
//   validateJwt,
//   validationHandler(idCategorySchema, 'params'),
//   validationHandler(createCategorySchema, 'body')
// ], updateCategory)

// router.delete('/:id', [
//   validateJwt,
//   validationHandler(idCategorySchema, 'params')
// ], deleteCategory)

export default router
