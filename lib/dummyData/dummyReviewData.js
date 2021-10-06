
const faker = require('faker');

module.exports = [


  {
    id:1,
    rating:faker.datatype.number({ min: 1, max: 5 }),
    reviewer: 1,
    review:`${faker.lorem.sentence()}`,
    film:1
  }

];

