import Joi from 'joi'

const productId = Joi.number().integer().min(1)
const productTitle = Joi.string().min(0).max(255)
const productPubDate = Joi.string().min(3).max(30)
const productImg = Joi.string().min(3).max(255)
const productUrlDownload = Joi.string().min(3).max(255)

export const idProductSchema = Joi.object({
  id: productId.required()
})
export const nameProductSchema = Joi.object({
  name: productTitle.required()
})

export const createProductSchema = Joi.object({
  title: productTitle.required(),
  pub_date: productPubDate.required(),
  img: productImg.required(),
  url_download: productUrlDownload.required()
})

export const updatedProductSchema = Joi.object({
  title: productTitle.optional(),
  pub_date: productPubDate.optional(),
  img: productImg.optional(),
  url_download: productUrlDownload.optional()
})
