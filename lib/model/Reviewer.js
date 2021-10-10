const pool = require('../utils/pool');

module.exports =  class Reviewer {


  constructor(row){
      
    this.id = Number(row.id);
    this.name = row.name;
    this.company = row.company;
      
  }
  
  static async insertReviewer({ name, company }){  
    const { rows } = await pool.query(
  
      ' INSERT INTO reviewers (name, company) VALUES ($1, $2) RETURNING * ',
      [name, company]
    );
  
    return new Reviewer (rows[0]);
  
  }
  //-----------------------------------------------------------------------//

  static async getReviewers(){  
    const { rows } = await pool.query(
      ' SELECT id, name, company FROM reviewers ',
    );
  
    return rows.map(row => new Reviewer (row));
  
  }
  //-----------------------------------------------------------------------//
  
  static async getReviewersById(id){  
    const rowsA  = await pool.query(
      `SELECT 
      reviewers.id AS reviewers_id, 
      reviewers.name, 
      reviewers.company
      FROM reviewers
      WHERE reviewers.id = $1`, [id]
    );

    const rowsB =  await pool.query( 
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
      WHERE reviewers.id = $1`, [id]
    );

    const rowsBb = rowsB.rows.map(row => {
      return {
        id: Number(row.reviews_id),
        rating: Number(row.rating),
        review: row.review,
        film: { id: Number(row.films_id), title:row.title }
      };
    });



    const obj =  {
      id: Number(rowsA.rows[0].reviewers_id),
      name: rowsA.rows[0].name,
      company: rowsA.rows[0].company,
      reviews: rowsBb
    };

    return obj;
  }
  
  //-----------------------------------------------------------------------//

  static async updateReviewer(id, objBody){  
    const { rows } = await pool.query(
      'UPDATE reviewers SET name=$2, company=$3 WHERE id=$1 RETURNING *',
      [id, objBody.name, objBody.company]);
  
    return new  Reviewer(rows[0]);
  
  }
  //-----------------------------------------------------------------------//
    
  
};
