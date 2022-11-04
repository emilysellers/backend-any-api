const pool = require('../utils/pool');

module.exports = class Animal {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.diet = row.diet;
    this.habitat = row.habitat;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from pnw_animals');
    return rows.map((animalRow) => new Animal(animalRow));
  }
};
