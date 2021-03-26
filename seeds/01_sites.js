
const site_data = require('../seed_data/sites_data.js')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sites').del()
    .then(function () {
      // Inserts seed entries
      return knex('sites').insert(site_data);
    });
};
