const { Router } = require('express');
const Studio = require('../model/Studio.js');



module.exports = Router()


  .post('/', async (req, res, next) => {


    try{

      const inserted_data = await Studio.insertStudio(req.body);
      
      res.send(inserted_data);



    }
    catch(error){

      next(error);
    }



  })

  .get('/', async (req, res, next) => {

    try {
      const allStudioData = await Studio.getStudioData();

      res.send(allStudioData);

    } catch (error) {

      next (error);
    }

  })

  .get('/:id', async (req, res, next) => {

    try {
     
      const studioById = await Studio.getStudioId(req.params.id);
    
      res.send(studioById);
      
    } catch (error) {

      next (error);
    }
  });



