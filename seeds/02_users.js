
const users_data = require('../seed_data/users_data.js')

exports.seed = function(knex) {
  return knex('users').del()
    .then(function() {
      return knex('users').insert(users_data)
    });
};