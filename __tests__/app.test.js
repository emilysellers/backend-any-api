const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { trees } = require('../lib/trees-data');

describe('trees routes', () => {
  beforeEach(() => {
    return setup(pool);
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
