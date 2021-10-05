
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
  static async getStudioData() {
    const { rows } = await pool.query(

    'SELECT id, name FROM studios')

    return rows.map(row => new Studio(row));  

  }

//------------------------------------------------//  
static async getStudioId(id) {
  const { rows } = await pool.query(

    `SELECT id, name, city, state, country, films.id, films.title FROM studios
    LEFT JOIN films
    ON studio.id = film.studio`, [id]
  )

  return rows[0];
}


};

