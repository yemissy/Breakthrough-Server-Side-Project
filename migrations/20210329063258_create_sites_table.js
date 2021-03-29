exports.up = function(knex) {
    return knex.schema.createTable('sites', function(table) {
      table.increments('id');
      table.string('name');
      table.string("address");
      table.string('city');
      table.string('state');
      table.integer('zip_code');
      table.date('start_date');
      table.string('status');
      table.string('vaccine_type')
      // Active / Inactive site
    })
  };
  // drop sites table
  exports.down = function(knex) {
    return knex.schema.dropTable('sites')
};