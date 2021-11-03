const express = require('express');

const UsersServices = require('../services/usersService');
const validatorHandler = require('../middlewares/validatorHandler');
const { createUserSchema, updateUserSchema, getUserSchema} = require('../schema/userSchema');


const router = express.Router();
const services = new UsersServices();


router.get('/', async (req, res) => {
  const users = await services.find();
  res.json(users)
});

router.get('/:id',
 validatorHandler(getUserSchema, 'params'),
 async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await services.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});
router.post('/',
validatorHandler(createUserSchema, 'body'),
async (req,res) => {
    const body = req.body;
    const newUser = await services.create(body);
    res.status(201).json({
      message: 'Producto Creado',
      data: body
    });
})

router.patch('/:id',
validatorHandler(getUserSchema, 'params'),
validatorHandler(updateUserSchema, 'body'),
async (req,res, next) => {
  try {
    const {id} = req.params;
    const body = req.body;
    const User = await services.update(id, body);
    res.json(User);
  } catch (error) {
    next(error);
  }
})

router.delete('/:id',
validatorHandler(getUserSchema, 'params'),
async (req,res) => {
  const {id} = req.params;
  const user = await services.delete(id);
  res.json(user);
})

module.exports = router;

