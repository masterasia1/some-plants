/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
    return knex('plants').insert([
        {plant_name: 'rose', plant_img: 'url'},
        {plant_name: 'tulip', plant_img: 'url'},
        {plant_name: 'red rose', plant_img: 'url'},
        {plant_name: 'daisy', plant_img: 'url'}
      ]);
    }
