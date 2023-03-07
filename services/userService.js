const { faker } = require('@faker-js/faker');


class UsersService {
    constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 10;
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.fullName(),
        username: faker.internet.userName(),
        birthdate: faker.date.birthdate(),
      });
    }
  }


  create() {

  }

  find() {
    return this.users;
  }

  findOne(id) {
    return this.users.find(item => item.id === id);
  }

  update() {

  }

  delete() {

  }
}

module.exports = UsersService;

