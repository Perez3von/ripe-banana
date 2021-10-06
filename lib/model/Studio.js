
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

      'SELECT id, name FROM studios');

    return rows.map(row => new Studio(row));  

  }

  //------------------------------------------------//  
  static async getStudioId(id) {
    const { rows } = await pool.query(

      `SELECT studios.id, name, city, state, country, films.id as film_id, films.title as film_title 
        FROM studios
        LEFT JOIN films
        ON studios.id = films.studio
        WHERE studios.id= $1`, [id]
    );

    //{id:, name, city, state, country, film_id: value, film_title: value }
    
    const obj = {

      id:Number(rows[0].id),
      name:rows[0].name,
      city:rows[0].city,
      state:rows[0].state,
      country:rows[0].country,
      films:[{
        id:Number(rows[0].film_id),
        title:rows[0].film_title
      }],
    };

    console.log("IM HEREEEEEEEEE", obj);
    return obj;
  }


};

