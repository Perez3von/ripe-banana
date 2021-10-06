
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

  

};