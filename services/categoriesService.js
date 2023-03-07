const { faker } = require('@faker-js/faker');

class CategoriesService {

  constructor() {
    this.categories = [];
    this.generate();
  }

  generate() {
    for (let i = 0; i < 8; i++) {
      this.categories.push({
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
    })
    }
  }


  create() {

  }

  find() {
    return this.categories;
  }

  findOne(id) {
    return this.categories.find(item => item.id === id);
  }

  update() {

  }

  delete() {

  }
}

module.exports = CategoriesService;
