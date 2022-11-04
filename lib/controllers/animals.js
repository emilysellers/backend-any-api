const { Router } = require('express');
const Animal = require('../models/Animal');

module.exports = Router().get('/', async (req, res) => {
  const animals = await Animal.getAll();
  const filtered = animals.map(({ id, name }) => ({ id, name }));
  res.json(filtered);
});
