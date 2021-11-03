const { fake } = require('faker');
const faker = require('faker');

class UsersServices {

  constructor (){
    this.users =[];
    this.generate();
  }

generate() {
  const limit = 100;
  for (let i = 0; i < limit; i++) {
    this.users.push({
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phone: faker.phone.phoneNumberFormat(),
    email: faker.internet.email(),
    password: faker.internet.password()
    })
  }
}


async create (data) {
  const newUser = {
    id: faker.datatype.uuid(),
    ...data
  }
  this.products.push(newUser);
  return newUser;
}

find() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.users);
    }, 500);
  })
}


async findOne(id) {
  const user = this.users.find(item => item.id === id);
  if (!user) {
    throw boom.notFound('user not found');
  }
  if (user.isBlock) {
    throw boom.conflict('user is block');
  }
  return user;
}

async update(id, changes) {
  const index = this.users.findIndex(item => item.id === id);
  if (index === -1) {
    throw boom.notFound('product not found');
  }
  const product = this.users[index];
  this.users[index] = {
    ...product,
    ...changes
  };
  return this.users[index];
}

async delete(id) {
  const index = this.users.findIndex(item => item.id === id);
  if (index === -1) {
    throw boom.notFound('product not found');
  }
  this.users.splice(index, 1);
  return { id };
}

} module.exports = UsersServices;
