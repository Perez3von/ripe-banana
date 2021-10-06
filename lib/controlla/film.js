const { Router } = require('express');
const Film = require('../model/Film.js');



module.exports = Router()


  .post('/', async (req, res, next) => {

    try{

      const inserted_data = await Film.insertFilm(req.body);
     
      res.send(inserted_data);

    }
    catch(error){

      next(error);
    }
  })

  .get('/', async (req, res, next) => {

    try{
      // const film_id = req.params.id;
      const filmDataById = await Film.getFilm();
     
      res.send(filmDataById);

    }
    catch(error){
      next(error);
    }



  });
  

