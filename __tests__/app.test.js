const pool = require('../lib/utils/pool.js');
const setup = require('../data/setup.js');
const request = require('supertest');
const app = require('../lib/app.js');
//PATH to DATA FILE as variable. 
const dummyStudioData = require('../lib/dummyData/dummyStudioData.js');
const dummyFilmData = require('../lib/dummyData/dummyFilmData.js');
const dummyActorData = require('../lib/dummyData/dummyActorData.js');
const dummyReviewerData = require('../lib/dummyData/dummyReviewerData');
const dummyReviewData = require('../lib/dummyData/dummyReviewData.js');
const dummyFilmsActorsData = require('../lib/dummyData/dummyFilmsActorsData.js');




describe('ripe-banana routes', () => {
  beforeAll(() => {
    return setup(pool);
  });
  //code here

  //-----------------------------------------------------------------------------------------------------/

  it('POST /studios returns array of objects inserted', async () => {
    const single_object_from_dummyData = dummyStudioData[0];

    const res = await request(app).post('/studios').send(single_object_from_dummyData);
   

    expect(res.body).toEqual(single_object_from_dummyData);

  });


  //-----------------------------------------------------------------------------------------------------/

  
  it('POST /films returns array of objects inserted', async () => {
    const single_object_from_dummyData = dummyFilmData[0];

    const res = await request(app).post('/films').send(single_object_from_dummyData);
   
    expect(res.body).toEqual(single_object_from_dummyData);

  });


  //-----------------------------------------------------------------------------------------------------/


  it('POST /actors returns array of objects inserted', async () => {
    const single_object_from_dummyData = dummyActorData[0];
    
    const res = await request(app).post('/actors').send(single_object_from_dummyData);
   
    expect(res.body).toEqual(single_object_from_dummyData);

  });


  //-----------------------------------------------------------------------------------------------------/

  it('POST /reviewers array of objects inserted', async () => {
    const single_object_from_dummyData = dummyReviewerData[0];
    
    const res = await request(app).post('/reviewers').send(single_object_from_dummyData);
   
    expect(res.body).toEqual(single_object_from_dummyData);

  });


  //-----------------------------------------------------------------------------------------------------/


  it('POST /reviews array of objects inserted', async () => {
    const single_object_from_dummyData = dummyReviewData[0];
    
    const res = await request(app).post('/reviews').send(single_object_from_dummyData);
   
    expect(res.body).toEqual(single_object_from_dummyData);

  });

  // -----------------------------------------------------------------------------------------------------/








  it('GET /studios, returns [{ id, name }]', async () => {
    const res = await request(app).get('/studios');
    expect(res.body).toEqual([{

      id: expect.any(Number),
      name: expect.any(String) 
      
    }]);
  });



  //-----------------------------------------------------------------------------------------------------/

  it('GETS studio by ID', async () => {
    const res = await request(app).get('/studios/1');
    expect(res.body).toEqual({

      id: expect.any(Number),
      name: expect.any(String),
      city: expect.any(String),
      state: expect.any(String),
      country: expect.any(String),
      films: [{

        id: expect.any(Number),
        title: expect.any(String)
        
      }]
    });
  });




  //-----------------------------------------------------------------------------------------------------/


  it('GETS films ', async () => {
    const res = await request(app).get('/films');
    expect(res.body).toEqual([{

      id: expect.any(Number),
      title: expect.any(String),
      released: expect.any(Number),
      studio:{
        id:expect.any(Number),
        name:expect.any(String)
      }
    }]);
  });

  //-----------------------------------------------------------------------------------------------------/


  it('GETS films by ID with actors and reviews ', async () => {
    const res = await request(app).get('/films/1');
    expect(res.body).toEqual({
    //title:expect.any(String),
      released:expect.any(Number),
      studio: { id:expect.any(Number), name:expect.any(String) },
      //cast: [{ id:expect.any(Number), name:expect.any(String) }], // actor id and name
      reviews: [{
        id:expect.any(Number),
        rating:expect.any(String),
        review:expect.any(String),
        reviewer: { id:expect.any(Number), name:expect.any(String) }
      }]
    });
  });
  //---------------------------------------------------------------------------------------------//
  
  it('POSTS data to the table', async () => {
    const single_object_from_dummyData = dummyFilmsActorsData[0];
    
    const res = await request(app)
      .post('/filmsactors')
      .send(single_object_from_dummyData);
    expect(res.body).toEqual(single_object_from_dummyData);
  });

  //-----------------------------------------------------------------------------------------------------/


  afterAll(() => {
    pool.end();
  });
//--------------------------------------------------------------------------------------------------------//
});
