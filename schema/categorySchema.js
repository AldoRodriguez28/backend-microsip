const Joi = require('joi');

   const  id = Joi.string().uuid();
   const  categories = Joi.string();

const createCategorySchema = Joi.object({
 categories: categories.required()
});

const updateCategorySchema = Joi.object({
  categories: categories
});

const getCategorySchema = Joi.object({
  id: id.required(),
});

module.exports = { createCategorySchema, updateCategorySchema, getCategorySchema}
