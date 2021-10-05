
const pool = require('../utils/pool');

module.exports =  class Studio {


  constructor(row){

    this.id = Number(row.id);
    this.name = row.name;
    this.city = row.city;
    this.state = row.state;
    this.country = row.country;

  }

  //------------------------------------------------//
  static async insertStudio({ name, city, state, country }){


    const { rows } = await pool.query(

      ' INSERT INTO studios (name, city, state, country) VALUES ($1, $2, $3, $4) RETURNING * ',
      [name, city, state, country]


    );

    return new Studio(rows[0]);

  }
  
  //------------------------------------------------//  
};

