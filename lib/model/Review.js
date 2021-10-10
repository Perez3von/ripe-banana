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

  static async getAllRiviews(){  
    const { rows } = await pool.query(
  
      `SELECT 
      reviews.id AS reviews_id, 
      reviews.rating,
      reviews.review,
      films.id AS films_id,
      films.title
      FROM reviewers
      LEFT JOIN reviews
      ON reviewers.id = reviews.reviewer
      LEFT JOIN films
      ON reviews.film = films.id
      ORDER BY reviews.rating DESC
      LIMIT 100`,
    );
    
    return rows.map(row => {
     
      return {
        id: Number(row.reviews_id),
        rating: Number(row.rating),
        review: row.review,
        film: { id: Number(row.films_id), title: row.title }

      };
    });
  
  }
  //-----------------------------------------------------------------------//
  
    
  
};
