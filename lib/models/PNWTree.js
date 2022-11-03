const pool = require('../utils/pool');
module.exports = class PNWTree {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.botanicalName = row.botanical_name;
    this.maxHeight = row.max_height_feet;
    this.isEvergreen = row.is_evergreen;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from pnw_trees');
    return rows.map((treeRow) => new PNWTree(treeRow));
  }
};
