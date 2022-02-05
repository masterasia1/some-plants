/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
      return knex('users').insert([
        {username: 'john', password: 'lennon'},
        {username: 'wonder', password: 'woman'},
      ]);
    };

