
const faker = require('faker');
const generateDate = require('../lib/utils/helper.js');
module.exports = [


  {
    id:1,
    name:`${faker.name.findName()}`,
    dob: generateDate(),
    pob: `${faker.address.city()}`

   
  }

];
