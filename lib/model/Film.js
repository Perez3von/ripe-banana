
const pool = require('../utils/pool');

module.exports =  class Film {


  constructor(row){

    this.id = Number(row.id);
    this.title = row.title;
    this.studio = Number(row.studio);
    this.release = Number(row.release);
    
  }

  static async insertFilm({ title, studio, release }){


    const { rows } = await pool.query(

      ' INSERT INTO films (title, studio, release) VALUES ($1, $2, $3) RETURNING * ',
      [title, studio, release]


    );

    return new Film(rows[0]);

  }
  //-----------------------------------------------------------------------//
  static async getFilm(){
    const arr = [];

    const { rows } = await pool.query(

      ` SELECT films.id as film_id, title, release as released, studios.id as studio_id, name
      FROM films
      LEFT JOIN studios
      ON studios.id = films.studio
      `
    );

    const obj = {

      id: Number(rows[0].film_id),
      title: rows[0].title,
      released: Number(rows[0].released),
      studio: { 
        id:Number(rows[0].studio_id), 
        name:rows[0].name
      }
      


    };
    arr.push(obj);

    return arr;

  }
  //-----------------------------------------------------------//
  static async getFilmById(id){
    console.log("INPUT ID", id);

    const film = await pool.query(

      ` SELECT title, studio, release, studios.name
      FROM films
      INNER JOIN studios
      ON studios.id = films.studio
      WHERE films.id = $1
      `, [id]
    );

    // const cast  = await pool.query(

    //   `SELECT title, actors_id, name
     
    //   FROM films_actors
    //   LEFT JOIN actors
    //   ON actors.id = films_actors.actors_id
    //   LEFT JOIN films
    //   ON films.id = films_actors.films_id
    //   WHERE actors_id = $1
      
    //   `, [1]
    // );


    

    const review  = await pool.query(

      `SELECT
      reviews.id as review_id, 
      rating, 
      reviewers.id as reviewer_id, 
      reviewers.name, 
      reviews.review
      
      FROM reviews
      LEFT JOIN reviewers
      ON reviews.reviewer = reviewers.id
      LEFT JOIN films
      ON films.id = reviews.film
      WHERE films.id = $1
      GROUP BY 
      reviews.id, 
      rating, 
      reviewers.id, 
      reviewers.name, 
      reviews.review
      
      `, [id]
    );

  


    // console.log('FILMS SQL', film.rows[0]);
    //  console.log('CAST SQL', cast.rows);
    //  console.log('Reviews SQL', review.rows[0]);

   
    const obj =  {

      // title:cast.rows[0].title,
      released:Number(film.rows[0].release),
      studio: { id:Number(film.rows[0].studio), name:film.rows[0].name },
     // cast: [{ id:Number(cast.rows[0].actor_id), name:cast.rows[0].actor }], // actor id and name
      reviews: [{
        id:Number(review.rows[0].review_id),
        rating:review.rows[0].rating,
        review:review.rows[0].review,
        reviewer: { id:Number(review.rows[0].reviewer_id), name:review.rows[0].name }
      }]
  
    };

    

    return obj;

  }

};



