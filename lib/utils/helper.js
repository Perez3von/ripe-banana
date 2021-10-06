
const faker = require('faker');

const generateDate = () => {

  return `${faker.datatype.number({ min:1950, max:2015 })}-${('0'+faker.datatype.number({ min:1, max:12 })).slice(-2)}-${('0' + faker.datatype.number({ min:1, max:31 })).slice(-2)}`;
};

module.exports = generateDate;
