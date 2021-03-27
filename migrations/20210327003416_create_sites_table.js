exports.up = function(knex) {
    return knex.schema.createTable('sites', function(table) {
      table.increments('id')
      table.string("address")
      table.date("start_date")
      table.string("status")  // Active / Inactive site  
    })
  };
  
  // drop sites table
  exports.down = function(knex) {
    return knex.schema.dropTable('sites')
  };
  