const db = require('../data/db-config')


function getPlants() { return db('plants') }

async function insertPlant(plant) {
  const [newUserObject] = await db('plants').insert(plant, ['plant_name', 'plant_img',])
  return newUserObject
}

function deletePlant(plant_id) {
    return db('plants').where({ plant_id }).del();
  }

module.exports = {
    getPlants,
    insertPlant,
    deletePlant,
   
  };
  