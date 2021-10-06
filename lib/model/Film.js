
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
  static async getFilmById(){
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

  
    // title:expect.any(String),
    // released:expect.any(Number),
    // studio: { id:expect.any(Number), name:expect.any(String) },
    // cast: [{ id:expect.any(Number), name:expect.any(String) }], // actor id and name
    // reviews: [{
    //   id:expect.any(Number),
    //   rating:expect.any(String),
    //   review:expect.any(Number),
    //   reviewer: { id:expect.any(Number), name:expect.any(String) }
    // }]
  }



