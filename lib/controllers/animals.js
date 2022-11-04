const { Router } = require('express');
const Animal = require('../models/Animal');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const animal = await Animal.getById(req.params.id);
    res.json(animal);
  })
  .get('/', async (req, res) => {
    const animals = await Animal.getAll();
    const filtered = animals.map(({ id, name }) => ({ id, name }));
    res.json(filtered);
  });
