
const faker = require('faker');

const generateDate = () => {

  return `${faker.datatype.number({ min:1950, max:2015 })}-${faker.datatype.number({ min:1, max:12 })}-${faker.datatype.number({ min:1, max:31 })}`;
};

module.exports = generateDate;
