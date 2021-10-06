const { Router } = require('express');
const Reviwer = require('../model/Reviewer.js');

module.exports = Router()

  .post('/', async (req, res, next) => {
    try {
      const insert_reviwer = await Reviwer.insertReviewer(req.body);
      res.send(insert_reviwer);
    } catch (error) {
      next(error);
    }
  });
