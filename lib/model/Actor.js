
const pool = require('../utils/pool');

module.exports =  class Actor {


  constructor(row){

    this.id = Number(row.id);
    this.title = row.title;
    this.studio = Number(row.studio);
    this.release = Number(row.release);
    
  }

  static async insertActor({ name, dob, pob }){


    const { rows } = await pool.query(

      ' INSERT INTO actors (name, dob, pob) VALUES ($1, $2, $3) RETURNING * ',
      [name, dob, pob]


    );

    return new Actor(rows[0]);

  }
  //-----------------------------------------------------------------------//

  

};
