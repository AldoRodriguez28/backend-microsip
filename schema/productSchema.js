const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(30);
const costo = Joi.number();
const price = Joi.number();
const iva = Joi.number();

const createProductSchema = Joi.object({
  id: id.required(),
  name: name.required(),
  costo: costo.required(),
  price: price.required(),
  iva: iva.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  costo: costo,
  price: price,
  iva: iva
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema}
