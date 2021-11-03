const express = require('express');

const CategoriesServices = require('../services/categoriesServices');
const validatorHandler = require('../middlewares/validatorHandler');
const { createCategorySchema, updateCategorySchema, getCategorySchema} = require('../schema/categorySchema');

const router = express.Router();
const service = new CategoriesServices();



router.get('/',  async (req, res) => {
  const categories = await service.find();
  res.json(categories)
});

router.get('/:id',
 validatorHandler(getCategorySchema, 'params'),
 async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await service.findOne(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.post('/',
validatorHandler(createCategorySchema, 'body'),
async (req,res) => {
    const body = req.body;
    const newCategory = await service.create(body);
    res.status(201).json({
      message: 'Category Creado',
      data: body
    });
})

router.patch('/:id',
validatorHandler(getCategorySchema, 'params'),
validatorHandler(updateCategorySchema, 'body'),
async (req,res, next) => {
  try {
    const {id} = req.params;
    const body = req.body;
    const Category = await service.update(id, body);
    res.json(Category);
  } catch (error) {
    next(error);
  }
})

router.delete('/:id',async (req,res) => {
  const {id} = req.params;
  const category = await service.delete(id);
  res.json(category);
})

module.exports = router;
