const pool = require('../lib/utils/pool.js');
const setup = require('../data/setup.js');
const request = require('supertest');
const app = require('../lib/app.js');
//PATH to DATA FILE as variable. 
const dummyStudioData = require('../lib/dummyData/dummyStudioData.js');
const faker = require('faker');


describe('ripe-banana routes', () => {
  beforeAll(() => {
    return setup(pool);
  });
  //code here

  //-----------------------------------------------------------------------------------------------------/

  it('POST /studios returns array of objects inserted', async () => {
    const single_object_from_dummyData = dummyStudioData[0];

    const res = await request(app).post('/studios/').send(single_object_from_dummyData);
   

    expect(res.body).toEqual(single_object_from_dummyData);

  });


  //-----------------------------------------------------------------------------------------------------/

  it('GET /studios, returns [{ id, name }]', async() => {
    const res = await request(app).get('/studios/');
    expect(res.body).toEqual([{

      id: expect.any(Number),
      name: expect.any(String) 
      
    }])
  });
  // console.log('AAAAAHHHHHHH!!!!!!!!', faker.date);
  
  });


  //-----------------------------------------------------------------------------------------------------/






  //-----------------------------------------------------------------------------------------------------/
  afterAll(() => {
    pool.end();
  });

