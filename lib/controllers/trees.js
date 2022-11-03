const { Router } = require('express');
const PNWTree = require('../models/PNWTree.js');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const tree = await PNWTree.getById(req.params.id);
    res.json(tree);
  })

  .get('/', async (req, res) => {
    const trees = await PNWTree.getAll();
    const filtered = trees.map(({ id, name }) => ({ id, name }));
    res.json(filtered);
  });
