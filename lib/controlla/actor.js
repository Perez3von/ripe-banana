const { Router } = require('express');
const Actor = require('../model/Actor.js');

module.exports = Router()


  .post('/', async (req, res, next) => {

    try{

      const inserted_actor = await Actor.insertActor(req.body);
      res.send(inserted_actor);

    }
    catch(error){

      next(error);
    }
  })
  .get('/', async (req, res, next) => {

    try{

      const getActors = await Actor.getActors();
      res.send(getActors);
    }
    catch(error){

      next(error);
    }

  })
  .get('/:id', async (req, res, next) => {

    try{
      const getActors = await Actor.getActorsWithFilms(req.params.id);
      res.send(getActors);
    }
    catch(error){

      next(error);
    }

  });




