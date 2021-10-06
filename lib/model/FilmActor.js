const pool = require('../utils/pool');

module.exports =  class FilmActor {


  constructor(row){

    this.films_id = Number(row.films_id);
    this.actors_id = Number(row.actors_id);
    
  }

  static async insertFilmActor({ films_id, actors_id}){


    const { rows } = await pool.query(

      ' INSERT INTO films_actors (films_id, actors_id) VALUES ($1, $2) RETURNING * ',
      [films_id, actors_id]


    );

    return new FilmActor(rows[0]);

  }
}
