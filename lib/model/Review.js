const pool = require('../utils/pool');

module.exports =  class Review {


  constructor(row){
      
    this.id = Number(row.id);
    this.rating = Number(row.rating);
    this.reviewer = Number(row.reviewer);
    this.review = row.review;
    this.film = Number(row.film);
      
  }
  
  static async insertReview({ rating, reviewer, review, film }){  
    const { rows } = await pool.query(
  
      ' INSERT INTO reviews (rating, reviewer, review, film) VALUES ($1, $2, $3, $4) RETURNING * ',
      [rating, reviewer, review, film]
    );
  
    return new Review(rows[0]);
  
  }
  //-----------------------------------------------------------------------//
  
    
  
};
