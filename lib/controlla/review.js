const { Router } = require('express');
const Review = require('../model/Review');


module.exports = Router()

  .post('/', async (req, res, next) => {
    try {
      const insert_review = await Review.insertReview(req.body);
      res.send(insert_review);
    } catch (error) {
      next(error);
    }
  });
