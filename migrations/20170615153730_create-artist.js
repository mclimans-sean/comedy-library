
exports.up = function(knex, Promise) {
  return knex.schema.createTable('artist', (table) => {
    table.increments();
    table.text('name').notNullable();
    table.text('website')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('artist');
};
