
const pool = require('../utils/pool');

module.exports =  class Actor {


  constructor(row){
    
    this.id = Number(row.id);
    this.name = row.name;
    this.dob = row.dob;
    this.pob = row.pob;
    
  }

  static async insertActor({ name, dob, pob }){


    const { rows } = await pool.query(

      ` INSERT INTO actors (name, dob, pob) VALUES ($1, $2, $3) 
        RETURNING name, to_char(dob, 'yyyy-mm-dd') as dob, pob, id `,
      [name, dob, pob]


    );
    // const parsedDOB = rows[0].dob;
    // const justDate = parsedDOB.toString();
    // console.log('TYPE', justDate);

    return new Actor(rows[0]);

  }
  //-----------------------------------------------------------------------//

  static async getActors(){


    const { rows } = await pool.query(
      ` SELECT  name, id 
      FROM actors `
    );

    return rows.map(row => new Actor(row));

  }
  //-----------------------------------------------------------------------//

  static async getActorsWithFilms(id){

    const { rows } = await pool.query(
      `SELECT actors.name, actors.dob, actors.pob, films.id, films.title, films.release
      FROM actors
      LEFT JOIN films_actors
      ON films_actors.actors_id = actors.id
      LEFT JOIN films
      ON films.id = films_actors.films_id
      WHERE actors.id =$1`, [id]
    );

    console.log(rows[0]);
    const obj = {
      name: rows[0].name,
      dob: rows[0].dob,
      pob: rows[0].pob,
      films: [{
        id:Number(rows[0].id),
        title:rows[0].title,
        released: Number(rows[0].release),
      }]
    };
 
    return obj;
  }
  //-----------------------------------------------------------------------//









};
