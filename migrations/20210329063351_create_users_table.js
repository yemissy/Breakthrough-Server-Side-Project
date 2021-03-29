// create users table
exports.up = function(knex) {
    return knex.schema.createTable('users',
    function(table) {
      table.increments('id')
      table.string('first_name')
      table.string('last_name')
      table.string('email').unique()
      table.string('phone_number')
      table.date('first_dose_date')
      table.date('second_dose_date')
      table.integer('site_id')
      table.integer('zip_code')
      table.foreign('site_id').references('sites.id')
    })
  };
  // drop users table
  exports.down = function(knex) {
    return knex.schema.dropTable('users')
};