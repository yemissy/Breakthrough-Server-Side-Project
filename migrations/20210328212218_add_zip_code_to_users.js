
exports.up = function(knex) {
  return knex.schema.alterTable('users', function (table) {
    table.integer('zip_code');
  } )
};

exports.down = function(knex) {
  return knex.schema.alterTable('sites', function(table) {
    table.dropColumn("zip_code")
  })
};
