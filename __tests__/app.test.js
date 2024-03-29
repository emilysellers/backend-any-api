const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { trees } = require('../lib/trees-data');
const { animals } = require('../lib/animals-data');

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

  // afterAll(() => {
  //   pool.end();
  // });
});

describe('animals routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/animals should return list of animals', async () => {
    const res = await request(app).get('/animals');
    const expected = animals.map((animal) => {
      return { id: animal.id, name: animal.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/animals/:id should return animal detail', async () => {
    const res = await request(app).get('/animals/3');
    const coyote = {
      id: '3',
      name: 'Coyote',
      diet: 'small mammals, birds, insects, fruit and carrion',
      habitat:
        'ranges from grasslands to dense forests, and from remote wilderness to highly urbanized areas',
    };
    expect(res.body).toEqual(coyote);
  });

  afterAll(() => {
    pool.end();
  });
});
