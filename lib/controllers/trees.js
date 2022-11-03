const { Router } = require('express');
const PNWTree = require('../models/PNWTree.js');

module.exports = Router().get('/', async (req, res) => {
  const trees = await PNWTree.getAll();
  const filtered = trees.map(({ id, name }) => ({ id, name }));
  res.json(filtered);
});
