const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().min(2).max(255).required(),
  description: Joi.string().optional(),
  price: Joi.number().positive().required(),
  stock: Joi.number().integer().min(0).required(),
  category_id: Joi.number().integer().required(),
  image_url: Joi.string().uri().optional()
});

module.exports = { productSchema };
