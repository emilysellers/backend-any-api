const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { trees } = require('../lib/trees-data');

describe('trees routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/trees/:id should return a tree detail', async () => {
    const res = await request(app).get('/trees/1');
    const redAlder = {
      id: '1',
      name: 'Red Alder',
      botanicalName: 'Alnus rubra',
      maxHeight: 50,
      isEvergreen: false,
    };
    expect(res.body).toEqual(redAlder);
  });

  it('/trees should return a list of trees', async () => {
    const res = await request(app).get('/trees');
    const expected = trees.map((tree) => {
      return { id: tree.id, name: tree.name };
    });
    expect(res.body).toEqual(expected);
  });

  // describe('backend-express-template routes', () => {
  //   beforeEach(() => {
  //     return setup(pool);
  //   });
  // it('example test - delete me!', () => {
  //   expect(1).toEqual(1);
  // });
  afterAll(() => {
    pool.end();
  });
});
