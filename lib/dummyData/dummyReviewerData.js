
const faker = require('faker');

module.exports = [


  { 
    id: 1,
    name: `${faker.name.findName()}`,
    company:`${faker.lorem.word()}@gmail.com`,
  },
  { 
    id: 2,
    name: `${faker.name.findName()}`,
    company:`${faker.lorem.word()}@gmail.com`,
  }

];
