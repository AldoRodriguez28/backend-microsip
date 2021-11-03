const express = require('express');
const UsersServices = require('../services/usersService')

const router = express.Router();
const services = new UsersServices();


router.get('/', (req, res) => {
  const users = services.find();
  res.json(users)
});

router.get('/:id',(req, res)=> {
  const {id} = req.params;
  const user = services.findOne(id)
  res.json(user);
});

router.post('/',(req,res) => {
  const body = req.body;
  res.json({
    message: 'Usuario Creado',
    data: body
  });
})

router.patch('/:id',(req,res) => {
  const {id} = req.params;
  const body = req.body;
  res.json({
    message: 'Usuario Actualizado',
    data: body,
    id,
  });
})

router.delete('/:id',(req,res) => {
  const {id} = req.params;
  res.json({
    message: 'Usuario Eliminado',
    id,
  });
})

module.exports = router;

