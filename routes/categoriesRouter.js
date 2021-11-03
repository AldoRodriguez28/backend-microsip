const express = require('express');
const CategoriesServices = require('../services/categoriesServices')

const router = express.Router();
const service = new CategoriesServices();



router.get('/', (req, res) => {
  const categories = service.find();
  res.json(categories)
});

router.get('/:id',(req, res)=> {
  const {id} = req.params;
  const category = service.findOne(id);
  res.json(category);

});

router.post('/',(req,res) => {
  const body = req.body;
  res.status(201).json({
    message: 'Categoria Creado',
    data: body
  });
})

router.patch('/:id',(req,res) => {
  const {id} = req.params;
  const body = req.body;
  res.json({
    message: 'Categoria Actualizado',
    data: body,
    id,
  });
})

router.delete('/:id',(req,res) => {
  const {id} = req.params;
  res.json({
    message: 'Categoria Eliminado',
    id,
  });
})

module.exports = router;
