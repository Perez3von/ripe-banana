const { Router } = require('express');


module.exports = Router()


  .post('/', async (req, res, next) => {

    try{

     
      res.send('Actor route');

    }
    catch(error){

      next(error);
    }
  });
