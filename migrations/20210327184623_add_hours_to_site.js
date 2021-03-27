
exports.up = function(knex) {
  return knex.schema.alterTable('sites', function (table) {
    table.time('opening_time');
    table.time('closing_time');
  } )
};

exports.down = function(knex) {
  return knex.schema.alterTable('sites', function(table) {
    table.dropColumn('opening_time');
    table.dropColumn('closing_time');
  })
};
