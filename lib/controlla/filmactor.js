const { Router } = require('express');
const FilmActor = require('../model/FilmActor.js');



module.exports = Router()

  .post('/', async (req, res, next) => {

    try{

      const inserted_filmactor_data = await FilmActor.insertFilmActor(req.body);
     
      res.send(inserted_filmactor_data);

    }
    catch(error){

    next(error);
    }
  })