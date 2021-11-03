const Joi = require('joi');

   const  id = Joi.string().uuid();
   const  category = Joi.string();

const createCategorySchema = Joi.object({
 category: category.required()
});

const updateCategorySchema = Joi.object({
  category: category
});

const getCategorySchema = Joi.object({
  id: id.required(),
});

module.exports = { createCategorySchema, updateCategorySchema, getCategorySchema}
