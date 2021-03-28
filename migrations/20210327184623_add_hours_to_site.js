
exports.up = function(knex) {
  return knex.schema.alterTable('sites', function (table) {
    table.date("start_date")
    table.string("status") 
    table.string('vaccine_type'); 
  } )
};

exports.down = function(knex) {
  return knex.schema.alterTable('sites', function(table) {
    table.dropColumn("start_date")
    table.dropColumn("status") 
    table.dropColumn('vaccine_type'); 
  })
};
