const faker = require('faker');



module.exports = [


  {
    id:1,
    name: `${faker.random.word()}`,
    city: `${faker.address.city()}`,
    state: `${faker.address.state()}`,
    country: `${faker.address.country()}`
      
  },

  {
    id:2,
    name: `${faker.random.word()}`,
    city: `${faker.address.city()}`,
    state: `${faker.address.state()}`,
    country: `${faker.address.country()}`
      
  },

  {
    id:3,
    name: `${faker.random.word()}`,
    city: `${faker.address.city()}`,
    state: `${faker.address.state()}`,
    country: `${faker.address.country()}`
      
  },

  {
    id:4,
    name: `${faker.random.word()}`,
    city: `${faker.address.city()}`,
    state: `${faker.address.state()}`,
    country: `${faker.address.country()}`
      
  }

];
