const { Router } = require('express');
const Reviewer = require('../model/Reviewer.js');
const Reviwer = require('../model/Reviewer.js');

module.exports = Router()

  .post('/', async (req, res, next) => {
    try {
      const insert_reviwer = await Reviewer.insertReviewer(req.body);
      res.send(insert_reviwer);
    } catch (error) {
      next(error);
    }
  });
