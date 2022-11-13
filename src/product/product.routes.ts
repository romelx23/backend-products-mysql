import { Router } from 'express'
import { validationHandler } from '../utils/middlewares'
import { idProductSchema, nameProductSchema } from '../utils/schemas'
import { getProduct, getOneProduct, findProduct, findProductByCategory } from './product.controller'
const router = Router()

router.get('/', getProduct)

router.get('/:id', [
  validationHandler(idProductSchema, 'params')], getOneProduct)

router.get('/term/:name', [
  validationHandler(nameProductSchema, 'name')
], findProduct)

router.get('/category/:id', [], findProductByCategory)

// router.post('/', [
//   validateJwt,
//   validationHandler(createProductSchema, 'body')
// ], createProduct)

// router.put('/:id', [
//   validateJwt,
//   validationHandler(idProductSchema, 'params'),
//   validationHandler(createProductSchema, 'body')
// ], updateProduct)

// router.delete('/:id', [
//   validateJwt,
//   validationHandler(idProductSchema, 'params')
// ], deleteProduct)

export default router
