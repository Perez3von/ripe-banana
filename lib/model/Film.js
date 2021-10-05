
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
  

};
