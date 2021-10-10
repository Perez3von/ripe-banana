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
  })
  .get('/', async (req, res, next) => {
    try {
      const allReviewers = await Reviewer.getReviewers();
      res.send(allReviewers);
    } catch (error) {
      next(error);
      
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const reviewer = await Reviewer.getReviewersById(req.params.id);
      res.send(reviewer);
    } catch (error) {
      next(error);
      
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const updatedReviewer = await Reviewer.updateReviewer(req.params.id, req.body);
      res.send(updatedReviewer);
    } catch (error) {
      next(error);
      
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const deletereviewer = await Reviewer.deleteReviewer(req.params.id);
      res.send(deletereviewer);
    } catch (error) {
      next(error);
      
    }
  });

