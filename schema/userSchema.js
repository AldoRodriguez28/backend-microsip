const Joi = require('joi');

   const id =   Joi.string().uuid();
   const firstName = Joi.string();
   const lastName = Joi.string();
   const phone = Joi.string().length(10).pattern(/^[0-9]+$/);
   const email = Joi.string().email();
   const password = Joi.string().min(8).max(15);

const createUserSchema = Joi.object({
 firstName: firstName.required(),
  lastName: lastName.required(),
  phone: phone,
  email: email.required(),
  password: password.required()

});

const updateUserSchema = Joi.object({
  firstName: firstName,
   lastName: lastName,
   phone: phone,
   email: email,
   password: password
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema}
