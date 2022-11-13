import Joi from 'joi'

const categoryId = Joi.number().integer().min(1)

export const idCategorySchema = Joi.object({
  id: categoryId.required()
})
