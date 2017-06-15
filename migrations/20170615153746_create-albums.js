
exports.up = function(knex, Promise) {
  return knex.schema.createTable('albums', (table) => {
    table.increments();
    table.integer('artist_id').unsigned().references('artist.id');
    table.text('album_name').notNullable();
    table.integer('year').notNullable();
    table.text('album_cover');
    table.text('url');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('albums');
};
