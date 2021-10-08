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

