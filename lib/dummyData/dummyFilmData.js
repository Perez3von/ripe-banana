
const faker = require('faker');

module.exports = [


  {
    id:1,
    title: `${faker.lorem.words()}`,
    studio: 1,
    release: faker.random.number({ min:1970, max:2020 })
  }

];
