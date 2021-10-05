const { Router } = require('express');
const Film = require('../model/Film.js');



module.exports = Router()


  .post('/', async (req, res, next) => {

    try{

      const inserted_data = await Film.insertFilm(req.body);
      console.log(Film.insertFilm(req.body));
      res.send(inserted_data);

    }
    catch(error){

      next(error);
    }
  });
  

