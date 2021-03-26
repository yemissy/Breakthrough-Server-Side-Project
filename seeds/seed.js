
const site_data = require('../seed_data/sites_data')
const users_data = require('../seed_data/users_data')


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sites').del()
    .then(function () {
      // Inserts seed entries
      return knex('sites').insert(site_data);
    });
};

exports.seed = function(knex) {
  return knex('users').del()
    .then(function() {
      return knex('users').insert(users_data)
    });
};