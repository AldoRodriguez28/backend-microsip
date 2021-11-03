const faker = require('faker');
const boom = require('@hapi/boom')

class CategoriesServices {

  constructor (){
    this.categories =[];
    this.generate();
  }

generate() {
  const limit = 100;
  for (let i = 0; i < limit; i++) {
    this.categories.push({
      category: faker.commerce.department()
    })
  }
}


async create (data) {
  const newCategory = {
    id: faker.datatype.uuid(),
    ...data
  }
  this.products.push(newCategory);
  return newCategory;
}

find() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.categories);
    }, 500);
  })
}


async findOne(id) {
  const product = this.products.find(item => item.id === id);
  if (!product) {
    throw boom.notFound('product not found');
  }
  if (product.isBlock) {
    throw boom.conflict('product is block');
  }
  return product;
}

async update(id, changes) {
  const index = this.categories.findIndex(item => item.id === id);
  if (index === -1) {
    throw boom.notFound('categorie not found');
  }
  const category = this.categories[index];
  this.categories[index] = {
    ...category,
    ...changes
  };
  return this.categories[index];
}

async delete(id) {
  const index = this.categories.findIndex(item => item.id === id);
  if (index === -1) {
    throw boom.notFound('product not found');
  }
  this.categories.splice(index, 1);
  return { id };
}

} module.exports = CategoriesServices;
